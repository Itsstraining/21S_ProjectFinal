class CardsService {
    CARDS = [
        'Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥',
        'Át♦', '02♦', '03♦', '04♦', '05♦', '06♦', '07♦', '08♦', '09♦', '10♦', 'JJ♦', 'QQ♦', 'KK♦',
        'Át♣', '02♣', '03♣', '04♣', '05♣', '06♣', '07♣', '08♣', '09♣', '10♣', 'JJ♣', 'QQ♣', 'KK♣',
        'Át♠', '02♠', '03♠', '04♠', '05♠', '06♠', '07♠', '08♠', '09♠', '10♠', 'JJ♠', 'QQ♠', 'KK♠'
    ]
    priority = [
        12.4, 13.4, 1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4,
        12.3, 13.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3,
        12.2, 13.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2,
        12.1, 13.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1
    ]

    arrCart = ['3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 't', '2']
    arrChat = ['♠', '♣', '♦', '♥']
    shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var numRan = this.getRandom(0, i)
            var temp = array[i];
            array[i] = array[numRan];
            array[numRan] = temp;
        }
        return array
    }
    getRandom(min, max) {
        max++
        return Math.floor(Math.random() * (max - min) + min)
    }
    falmOff() {
        let deck = [...this.CARDS];
        for (let i = 0; i < deck.length; i++) {
            let temp = deck[i];
            let randomPos = Math.floor(Math.random() * 51)
            deck[i] = deck[randomPos]
            deck[randomPos] = temp
        }
        return deck;
    }

    /**
     * 
     * @param {Array} carts 
     * @param {number} numPlayer 
     */
    dealCarts(carts, numPlayer) {
        let arr = []
        for (let i = 0; i < numPlayer; i++) {
            let arrTemp = carts.splice(0, 13)
            this.sort(arrTemp)
            arr.push(arrTemp)
        }
        return arr
    }
    /**
     * 
     * @param {Array} deck 
     */
    sort(deck) {
        for (let i = 0; i < deck.length - 1; i++) {
            for (let j = 0; j < deck.length - i - 1; j++) {
                if (this.priority[this.CARDS.indexOf(deck[j])] > this.priority[this.CARDS.indexOf(deck[j + 1])]) {
                    let temp = deck[j]
                    deck[j] = deck[j + 1]
                    deck[j + 1] = temp
                }
            }
            // console.log(deck[i])

        }
        return deck
    }

    /**
     * 
     * @param {Array<string>} playerDeck 
     * @param {Array<string>} cards 
     */
    isValid(playerDeck, cards) {
        let isValid = false;

        for (let i = 0; i < cards.length; i++) {
            if (playerDeck.indexOf(cards[i]) != -1) {
                isValid = true;
            } else {
                isValid = false;
            }
            // console.log("player "+ this.priority[this.CARDS.indexOf(playerDeck[j])])
            // if (this.priority[this.CARDS.indexOf(cards[i])] == this.priority[this.CARDS.indexOf(playerDeck[j])]) {

            //     break;
            // }else{

            // }
        }
        return isValid;
    }

    /**
     * 
     * @param {String} cart1 
     * @param {String} cart2 
     */
    isGreater(cart1, cart2) {
        let num1 = cart1[1]
        let num2 = cart2[1]
        let chat1 = cart1[2]
        let chat2 = cart2[2]
        //♥ ♦ ♣ ♠
        if (num1 == num2) {
            return chat1 > chat2 ? cart1 : cart2
        } else {
            let val1 = arrCart.indexOf(num1)
            let val2 = arrCart.indexOf(num2)
            if (val1 > val2)
                return cart1
            return cart2
        }
    }
    isGreater1(cart1, cart2) {
        let num1 = this.arrCart.indexOf(cart1[1])
        let num2 = this.arrCart.indexOf(cart2[1])
        let chat1 = this.arrChat.indexOf(cart1[2])
        let chat2 = this.arrChat.indexOf(cart2[2])
        //♥ ♦ ♣ ♠
        num1 += '.' + chat1
        num2 += '.' + chat2
        if (num1 * 1 > num2 * 1)
            return cart1
        return cart2
    }
    /**
     * 
     * @param {Array} carts 
     */
    checkWin(carts) {
        if (carts.length == 0) {
            return true
        } else if (carts.length < 13) {
            return false
        } else {
            let token = ''
            let token1 = ''
            let strCart = carts[0][0] + carts[0][1]
            let strTemp = '0304050607080910JJQQKKÁt02'
            // 6 đôi
            let arrDoub = ''
            let canDoub = true
            let arrTripb = ''
            let canTripb = true
            for (let i = 1; i < 13; i++) {
                token = carts[i][0] + carts[i][1]
                token1 = carts[i - 1][0] + carts[i - 1][1]
                strCart += token
                if (canTripb && arrDoub.includes(token)) {
                    arrTripb += token
                    canDoub = true
                    canTripb = false
                } else if (canDoub && token == token1) {
                    arrDoub += token
                    canDoub = false
                } else {
                    canDoub = true
                    canTripb = true
                }
            }
            if (arrDoub.length == 12) {
                return '6 đôi'
            } else if (strTemp.includes(arrDoub) && arrDoub != '') {
                return '5 đôi thông'
            } else if (arrTripb.length == 8) {
                return '4 xám cô'
            } else if (strCart.includes('02020202')) {
                return 'tứ quý heo'
            } else if (strTemp.includes(strCart)) {
                return 'từ 3 tới át'
            }

        }
    }

    /**
     * 
     * @param {string} cart1 
     * @param {string} cart2 
     * @param {Array} arrInput 
     * @param {Array} playerCarts 
     * 
     */
    quickTake(arrInput, playerCarts, cartIndex1) {
        let res = []
        let cart1IsGreater = isGreater(playerCarts[cartIndex1], arrInput[0])
        if (arrInput.length <= playerCarts.length) {
            if (arrInput.length == 1 && arrInput[0][1] != '2') { //Rác
                return []
            } else if (arrInput.length == 2 && cart1IsGreater) { //Đôi

                if (playerCarts[cartIndex1 - 1][1] == playerCarts[cartIndex1][1]) {
                    res.push(cartIndex1 - 1)
                    res.push(cartIndex1)
                } else if (playerCarts[cartIndex1 + 1][1] == playerCarts[cartIndex1][1]) {
                    res.push(cartIndex1)
                    res.push(cartIndex1 + 1)
                }

                if (res.length == 2 && isGreater(res[res.length - 1], arrInput[arrInput.length - 1])) {
                    return res
                }
                return []
            } else if (arrInput.length == 3 && arrInput[0][1] == arrInput[2][1] && cart1IsGreater) { //Sám
                let canTripb = 0
                let i = cartIndex1 - 2
                i < 0 ? i = 0 : i = i
                for (i; i < cartIndex1 + 3 || i < 13; i++) {
                    if (playerCarts[i][1] == playerCarts[cartIndex1][1]) {
                        canTripb++
                        res.push(i)
                    }
                }
                if (canTripb == 3) return res
                return []
            } else if (arrInput.length == 4 && arrInput[0][1] == arrInput[1][1]) { //Tứ
                let valTemp = arrInput[0][1]
                let canQua = 0
                for (let i = cartIndex1 - 3; i < cartIndex1 + 4 || i < 13; i++) {
                    if (playerCarts[i] == valTemp) {
                        canQua++
                        res.push(i)
                    }
                }
                if (canQua == 4) return res
                return false
            } else if (arrInput.length > 2 && arrInput[0][1] == arrInput[1][1]) { //Thông
                return 'Thong'
            } else { //Sảnh

                res.push(cartIndex1)
                let temp = arrCart.indexOf(cartIndex1[1])
                let cartTemp = arrCart[temp + 1]
                let canSanh = true
                for (let i = cartIndex1 + 1; i < 13; i++) {
                    if (playerCarts[i][1] == cartTemp) {
                        canSanh = true
                        res.push(i)

                        temp = arrCart.indexOf(playerCarts[i][1])
                        cartTemp = arrCart[temp + 1]
                    }
                    if (res.length == arrInput.length) {
                        if (isGreater1(res[res.length - 1], arrInput[arrInput.length - 1]))
                            return res
                        return
                    }
                }
                return false
            }
        }
    }
    getValueCart() {}


    //console.log(dealCarts(shuffleArray(CARDS)))
    //console.log(quickTake(['03♥', '03♦'], ['03♥', '04♦', '05♠', '06♥', '07♣', '08♥', '09♣', '10♥', 'JJ♥', 'QQ♦', 'KK♣', 'Át♦', '02♥'], '', ''))

    // let res = quickTake(['03♠', '03♦', '03 '], ['03♥', '05♦', '05♠', '05♥', '06♠', '07♠', '07♠', '09♠', '10♠', 'JJ♠', 'KK♠', 'At♠', 'At♣'], 1, 0)
    // console.log(res)
}
module.exports = CardsService　
