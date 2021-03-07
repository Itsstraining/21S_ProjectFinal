const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { rootCertificates } = require("tls");
const CardsService = require("./script");
const Room = require('./room');
const { Socket } = require("dgram");
const cardS = new CardsService();
const roomS = new Room();
const CheckCardService = require('./check')
const checkCards = new CheckCardService();
let room = {
    r120: {//Example
        roomId: 'r120',
        players: [12312312312312],
        isPlaying: false,
        playerFirstStart: '',
        cardOut: [],
        firstCardOut: false
    },
}

let cards = [
    ['03♦', '03♥', '04♠', '04♥', '05♠', '05♣', '05♥', '06♦', '06♥', 'Át♠', 'Át♣', 'Át♦', 'Át♥',],
    ['03♠', '05♠', '05♣', '05♥', '06♦', '07♣', '08♣', 'Át♠', 'Át♣', 'Át♦', 'Át♥', '02♠', '02♣',]
]
let publicValue = {
    //user:['lzTxZn9vcWWzywXNAAA5', '0RbojUK4uC2XGgt5AAA4'],
    //outCard:[],
    //numCard:[13,11]
}
let roomForAllUser = {
    r120: {
        roomId: 'r120',
        users: ['', '', '', ''],
        playerNum: 1
    }
}
let publicInRoom = [
    //{uid:uid,sid:sid}
]
let users = {
    12312312312312: {
        inRoom: "",
        id: 12312312312312,
        cards: [],
        isPlaying: false,
        inTurn: false,
        quitTurn: false,
        doneGame: false
    },
};

function a() {
    console.log('-------------------------------------------------------------------')
    console.log({
        room: room
    })
    console.log({
        roomAll: roomForAllUser
    })
    console.log({
        users: users
    })
}

function nextPlayer(id) {
    let players = room[users[id].inRoom].players
    let nexPlayer = players.indexOf(id) + 1;
    if (nexPlayer == players.length) {
        nexPlayer = 0;
    }
    if (users[players[nexPlayer]].quitTurn == true || users[players[nexPlayer]].doneGame == true) {
        return nextPlayer(players[nexPlayer]);
    } else return players[nexPlayer];
}

const documents = {};

io.on("connection", (socket) => {
    let previousId;
    users[socket.id] = {
        inRoom: "",
        id: socket.id,
        cards: [],
        isPlaying: false,
        inTurn: false,
        quitTurn: false,
        doneGame: false
    }
    console.log(`User [${socket.id}] is connect.`);
    socket.emit("getID", socket.id);
    socket.on('letStart', (roomID) => {
        try {
            let usersTemp = []
            usersTemp = room[roomID].players;

            room[roomID].isPlaying = true;
            if (usersTemp[0] == socket.id && usersTemp.length > 1) {
                io.of('/').in(roomID).clients(function (error, clients) {
                    let card = cardS.CARDS.slice()
                    let firstCard = []
                    let cardTemp = cardS.dealCarts(cardS.shuffleArray(card), usersTemp.length)
                    for (let i = 0; i < usersTemp.length; i++) {
                        users[usersTemp[i]].cards = cardTemp[i];
                        firstCard.push(cardTemp[i][0])
                        // //console.log(users[usersTemp[i]])
                        // io.to(usersTemp[i]).emit("gameData", cardTemp[i]);
                    }
                    let temp = cardS.sort([...firstCard]);
                    //temp = cardS.sort(temp);
                    users[usersTemp[firstCard.indexOf(temp[0])]].inTurn = true
                    for (let j = 0; j < usersTemp.length; j++) {
                        users[usersTemp[j]].isPlaying = true
                        io.to(usersTemp[j]).emit('gameData', users[usersTemp[j]]);
                        io.to(usersTemp[j]).emit('room', room[roomID]);
                    }
                });
                a()
            }
        } catch (err) {

        }
    })
    socket.on("join", (roomId) => {
        console.log('join')
        if (!room[roomId]) {
            socket.emit("canJoin", 'not found');
        }
        else {
            io.of("/").in(roomId).clients(function (error, clients) {
                if (roomForAllUser[roomId].playerNum < 5) {
                    if (room[roomId].players.length != 4) {

                    }

                    //change User[]
                    users[socket.id].inRoom = roomId;
                    roomForAllUser[roomId].playerNum += 1
                    for (let j = 0; j < 4; j++) {
                        if (roomForAllUser[roomId].users[j] == '') {
                            //change roomForAllUser[]
                            roomForAllUser[roomId].users[j] = socket.id
                            //change room[]
                            room[roomId].players.splice(j, 0, socket.id)
                            break
                        }
                    }
                    //send userInfo[]
                    for (let j = 0; j < 4; j++) {
                        io.to(room[roomId].players[j]).emit('playerInfo', roomForAllUser[roomId].users);
                    }
                    socket.emit("canJoin", true);
                    io.emit("rooms", roomForAllUser);
                    console.log(`socketId [${socket.id}] joined room.`);
                    a();
                }
                else {
                    socket.emit("canJoin", false);
                }

            });
        }
    });


    socket.on('quitTurn', () => {
        users[socket.id].inTurn = false;
        users[socket.id].quitTurn = true;
        let players = room[users[socket.id].inRoom].players;
        let nextId = nextPlayer(socket.id);
        let nextOfNextPlayer = nextPlayer(nextId)
        let roomId = users[socket.id].inRoom
        users[nextId].inTurn = true;
        if (nextId == nextOfNextPlayer) {
            room[users[socket.id].inRoom].cardOut = [];
            for (let i = 0; i < players.length; i++) {
                users[players[i]].quitTurn = false;
                io.to(players[i]).emit('room', room[roomId])
                io.to(players[i]).emit('gameData', users[players[i]])
            }
        } else {
            for (let i = 0; i < players.length; i++) {
                io.to(players[i]).emit('gameData', users[players[i]])
            }
        }
        a()
    })

    socket.on('sendCards', (deck) => {
        let roomId = users[socket.id].inRoom
        if (deck[0] != users[socket.id].cards[0] && room[roomId].firstCardOut == false) {
            socket.emit('getCheck', 'luot dau phai gom la be nhat');
        } else {
            room[roomId].firstCardOut = true
            room[roomId].cardOut.push(deck);
            for (let j = 0; j < deck.length; j++) {
                let index = users[socket.id].cards.indexOf(deck[j])
                users[socket.id].cards.splice(index, 1);
            }
            users[socket.id].inTurn = false;
            let nextId = nextPlayer(socket.id)
            users[nextId].inTurn = true;
            for (let i = 0; i < room[users[socket.id].inRoom].players.length; i++) {
                io.to(room[roomId].players[i]).emit('room', room[roomId])
                io.to(room[roomId].players[i]).emit('gameData', users[room[roomId].players[i]])
            }
            socket.emit('isValid', false);
        }
        if (users[socket.id].cards.length == 0) {
            let players = room[users[socket.id].inRoom].players;
            let nextId = nextPlayer(socket.id);
            let roomId = users[socket.id].inRoom;
            let nextOfNextPlayer = nextPlayer(nextId)
            console.log(nextId);
            console.log(nextOfNextPlayer);
            if (nextId == nextOfNextPlayer) {
                //het game
                console.log('het bai');
                room[roomId].cardOut = [];
                room[roomId].isPlaying = false;
                room[roomId].firstCardOut = false
                for (let i = 0; i < players.length; i++) {
                    io.to(players[i]).emit('endGame', true);
                }
            } else {
                users[socket.id].inTurn = false;
                users[socket.id].quitTurn = true;
                users[socket.id].cards = [];
                users[socket.id].doneGame = true;
                // let playerNum = players.indexOf(socket.id);
                // players.splice(playerNum,1);
                room[roomId].players = players;
                io.to(roomId).emit('room', room[roomId]);
                socket.emit()
            }
        }

        //gửi số lượng bài mỗi người
        let arrTemp = []
        for (let i = 0; i < 4; i++) {
            if (roomForAllUser[roomId].users[i] == '') {
                arrTemp.push('-1')
            }
            else
                arrTemp.push(users[room[roomId].players[i]].cards.length)
        }
        for (let i = 0; i < 4; i++) {
            io.to(roomForAllUser[roomId].users[i]).emit('numCardOfAll', arrTemp)
            let a = arrTemp.shift()
            arrTemp.push(a)
        }
        a();

        //io.to(room.roomId).emit('room',rooms[room.roomId])  
    })

    socket.on('checkValid', (deck) => {
        if (room[users[socket.id].inRoom].cardOut.length == 0) {
            let check = checkCards.isLegal(deck);
            if (check != 0) {
                socket.emit('isValid', true);
            } else socket.emit('isValid', false)
        } else {
            let lastCardOfOutNum = room[users[socket.id].inRoom].cardOut.length - 1;
            let lastCardsOut = room[users[socket.id].inRoom].cardOut[lastCardOfOutNum];
            let isValid = checkCards.compareDeck(deck, lastCardsOut)
            socket.emit('isValid', isValid);
        }
        //console.log(check)

    })


    socket.on("disconnect", function () {
        console.log(`User [${socket.id}] is disconnect.`)
        let rid = users[socket.id].inRoom;
        delete users[socket.id];
        //Change room[]
        if (room[rid]) {
            for (let i = 0; i < room[rid].players.length; i++) {
                if (room[rid].players[i] == socket.id) {
                    room[rid].players.splice(i, 1)
                    break
                }
            }
            for (let i = 0; i < 4; i++) {
                if (roomForAllUser[rid].users[i] == socket.id) {
                    roomForAllUser[rid].users[i] = ''
                    break
                }
            }
            roomForAllUser[rid]['playerNum'] -= 1
            if (roomForAllUser[rid]['playerNum'] == 0) {
                delete room[rid]
                //change roomForAllUser[]
                delete roomForAllUser[rid]
            }
            else {
                for (let j = 0; j < 4; j++) {
                    io.to(room[rid].players[j]).emit('playerInfo', roomForAllUser[rid].users);
                }
            }

        }
        io.emit('rooms', roomForAllUser)
        a()
    });

    socket.on("debug", doc => {
        documents[doc.id] = doc;
    });
    //io.emit("documents", Object.keys(documents));

    //Start ROOM
    socket.emit('getSocketId', socket.id)
    socket.on('createRoom', (newRoomID) => {
        if (room[newRoomID] == null) {
            room[newRoomID] = {
                roomId: newRoomID,
                players: [],
                isPlaying: false,
                playerFirstStart: '',
                cardOut: [],
                firstCardOut: false
            }
            roomForAllUser[newRoomID] = {
                roomId: newRoomID,
                playerNum: 0,
                users: ['', '', '', ''],
            }

            socket.emit('canCreateRoom', true)
            io.emit("rooms", roomForAllUser);
        }
        else {
            socket.emit('canCreateRoom', false)
        }
        a()
    })

    io.emit("rooms", roomForAllUser);
    //End   ROOM


    a()
    io.emit("users", Object.keys(documents));
    socket.on("debug", (doc) => {
        documents[doc.id] = doc;
    });
    //io.emit("documents", Object.keys(documents));
    a();
    io.emit("users", Object.keys(documents));
});
http.listen(3000, () => {
    console.log("listening on *:3000");
});
