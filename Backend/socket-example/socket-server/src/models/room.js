class room {
    roomId
    players
    isPlaying
    playerFirstStart
    cardOut
    constructor() {
        this.roomId = ''
        this.players = []
        this.isPlaying = false
        this.playerFirstStart = ''
        this.cardOut = []
    }
}
module.exports = room