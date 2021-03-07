class CheckCardService {
    CARDS1 = [
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

    rac(index, laCuoi) {
        if (this.priority[this.CARDS1.indexOf(index)] > this.priority[this.CARDS1.indexOf(laCuoi)]) {
            return [index]
        } else return undefined
    }

    /**
     * 
     * @param {Array<any>} deck 
     */
    sortDeck(deck) {
        for (let i = 0; i < deck.length - 1; i++) {
            for (let j = 0; j < deck.length - i - 1; j++) {
                if (this.priority[this.CARDS1.indexOf(deck[j])] > this.priority[this.CARDS1.indexOf(deck[j + 1])]) {
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
     * @param {Array<any>} playerDeck 
     * @param {number} numofCard 
     */
    dongSo(playerDeck, numOfCard, index, laCuoi) {
        let array = []
        let arr = []
        let temp = playerDeck.indexOf(index)
        if (numOfCard <= 4) {
            for (let i = temp; i < temp + numOfCard; i++) {
                if (Math.floor(this.priority[this.CARDS1.indexOf(playerDeck[temp])]) == Math.floor(this.priority[this.CARDS1.indexOf(playerDeck[i + 1])])) {
                    array.push(playerDeck[i + 1])
                }
                if (array.length == numOfCard - 1) {
                    array.push(index)
                    arr = this.sortDeck(array)
                    if (Math.floor(this.priority[this.CARDS1.indexOf(arr[arr.length - 1])]) == Math.floor(this.priority[this.CARDS1.indexOf(laCuoi)])) {
                        return arr
                    } else return undefined
                }
            }
        } else return undefined
    }

    /**
     * 
     * @param {Array<any>} playerDeck 
     * @param {Number} numOfCard 
     * @param {String} index
     */
    sanh(playerDeck, numOfCard, index, laCuoi) {
        let array = []
        let temp = playerDeck.indexOf(index)
        array.push(playerDeck[temp]);
        if (numOfCard > 2) {
            for (let j = temp; j < playerDeck.length && playerDeck[j + 1] != null; j++) {
                if (Math.floor(this.priority[this.CARDS1.indexOf(array[array.length - 1])]) == Math.floor(this.priority[this.CARDS1.indexOf(playerDeck[j + 1])] - 1) &&
                    playerDeck[j + 1][1] != "2") {
                    array.push(playerDeck[j + 1])
                }
                if (Math.floor(this.priority[this.CARDS1.indexOf(array[array.length - 1])] - 1) == Math.floor(this.priority[this.CARDS1.indexOf(array[array.length - 2])]) &&
                    this.priority[this.CARDS1.indexOf(array[array.length - 1])] > this.priority[this.CARDS1.indexOf(laCuoi)] && array.length == numOfCard) {
                    return array;
                } else if (array.length == numOfCard) {
                    array.pop()
                }
            }
            return array = undefined
        } else return array = undefined
        // return array
    }

    /**
     * 
     * @param {Array<any>} playerDeck 
     * @param {Number} numOfCard 
     * @param {Array<any>} index 
     */
    doiThong(playerDeck, numOfCard, index, laCuoi) {
        let temp = playerDeck.indexOf(index)
        let kq = this.sanh(playerDeck, numOfCard / 2, index, playerDeck[0])
        let arr = []
        if (kq != undefined) {
            for (let i = 0; i < kq.length; i++) {
                let temp = this.dongSo(playerDeck, 2, kq[i], kq[i])
                arr = arr.concat(temp)
            }
            if (this.priority[this.CARDS1.indexOf(arr[arr.length - 1])] < this.priority[this.CARDS1.indexOf(laCuoi)]) {
                temp = this.dongSo(playerDeck, 2, arr[arr.length - 1], arr[arr.length - 1])
                arr.splice(arr.length - 2, 2)
                arr = arr.concat(temp)
            }
            if (arr.length == numOfCard && numOfCard >= 6) {
                return arr
            } else return arr = undefined
        } else return arr = undefined

    }

    isLegal(array) {
        let type
        if (array.length == 1) {
            return type = 1
        } else {
            let temp = this.dongSo(array, array.length, array[0], array[0])
            if (temp != undefined) {
                return type = 2
            } else {
                temp = this.sanh(array, array.length, array[0], array[0])
                if (temp != undefined) {
                    return type = 3
                } else {
                    temp = this.doiThong(array, array.length, array[0], array[0])
                    console.log(temp)
                    if (temp != undefined) {
                        return type = 4
                    } else return type = 0
                }
            }
        }
    }

    /**
     * 
     * @param {number} type 
     * @param {Array} playerDeck 
     * @param {Array} lastOutCard 
     */
    compareDeck(playerDeck,lastOutCard){
        let playerDeckType = this.isLegal(playerDeck);
        let lastOutCardType = this.isLegal(lastOutCard);
        let lastCardOfPlayer = playerDeck[playerDeck.length-1];
        let lastCardOfOutCard = lastOutCard[lastOutCard.length-1];

        if (lastOutCardType == 1 && lastOutCard[0][1] == '2') {
            if (playerDeckType == 2 && playerDeck.length == 4) {
                return true;
            }else if (playerDeckType == 4) {
                return true;
            }else if (playerDeckType == 1 && this.priority[this.CARDS1.indexOf(lastCardOfPlayer)] > this.priority[this.CARDS1.indexOf(lastCardOfOutCard)] ) {
                return true;
            }else return false;
        }else if (lastOutCardType == 2 && lastOutCard[0][1] == '2' && lastOutCard.length == 2) {
            if (playerDeckType == 2 && playerDeck.length == 4) {
                return true;
            }else if (playerDeckType == 4 && playerDeck.length == 8 ) {
                return true;
            }else if (playerDeckType == 2 && playerDeck.length == 4 ) {
                return true;
            }else if (playerDeckType == 2 && playerDeck.length == 2 &&  this.priority[this.CARDS1.indexOf(lastCardOfPlayer)] > this.priority[this.CARDS1.indexOf(lastCardOfOutCard)] ) {
                return true;
            } return false;
        }else if (playerDeckType == lastOutCardType) {
            if (this.priority[this.CARDS1.indexOf(lastCardOfPlayer)] > this.priority[this.CARDS1.indexOf(lastCardOfOutCard)]) {
                return true
            }else return false
        }else return false
    }


}

module.exports = CheckCardService;