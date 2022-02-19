//
// function userCard(n) {
//     let nCard1 = {key: 1, balance: 100, transactionLimit: 100, historyLogs: []}
//     let nCard2 = {key: 2, balance: 100, transactionLimit: 100, historyLogs: []}
//     let nCard3 = {key: 3, balance: 100, transactionLimit: 100, historyLogs: []}
//     let array = [nCard1, nCard2, nCard3]
//
//     return {
//         getCardOptions: function () {
//             for (const arrayElement of array) {
//                 if (arrayElement.key === n)
//                     return arrayElement
//             }
//         },
//         putCredits: function (balCard) {
//             array[n - 1].balance = array[n - 1].balance + balCard;
//             array[n - 1].historyLogs.push({
//                 OperationType: 'Received credits',
//                 credits: balCard,
//                 operationTime: new Date().toLocaleString()
//             })
//         },
//         takeCredits: function (minCard) {
//             if (array[n - 1].balance + array[n - 1].transactionLimit >= minCard) {
//                 array[n - 1].balance = array[n - 1].balance - minCard;
//                 array[n - 1].historyLogs.push({
//                     OperationType: 'Withdrawal of credits',
//                     credits: minCard,
//                     operationTime: new Date().toLocaleString()
//                 })
//             } else {
//                 console.error('Недостатньо коштів')
//             }
//         },
//         setTransactionLimit: function (transaction) {
//             array[n - 1].transactionLimit = transaction;
//             array[n - 1].historyLogs.push({
//                 OperationType: 'Transaction Limit change',
//                 credits: transaction,
//                 operationTime: new Date().toLocaleString()
//             })
//         },
//         transferCredits: function (suma, card) {
//             if (array[n - 1].balance + array[n - 1].transactionLimit >= (suma + suma * 0.5 / 100)) {
//                 array[n - 1].balance = array[n - 1].balance - (suma + suma * 0.5 / 100)
//                 card.putCredits(suma);
//                 array[n - 1].historyLogs.push({
//                     OperationType: 'Withdrawal of credits',
//                     credits: suma + suma * 0.5 / 100,
//                     operationTime: new Date().toLocaleString()
//                 })
//             } else {
//                 console.error('Недостатньо коштів')
//             }
//         }
//     }
// }
//
// class UserAccaunt {
//
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//
//     }
//     addCard() {
//         let n=1
//         const card = userCard(n).getCardOptions();
//         this.cards.push(card);
//         return n++
//     }
//
//
//
//
//     getCardByKey(n) {
//         if (n === 1) return userCard(1)
//         if (n === 2) return userCard(2)
//         if (n === 3) return userCard(3)
//     }
// }
//
// let user = new UserAccaunt('Bob')
// user.addCard()
// user.addCard()
//
// let card1 = user.getCardByKey(1)
// let card2 = user.getCardByKey(2)
//
// card1.putCredits(500);
// card1.setTransactionLimit(800)
// card1.transferCredits(300,card2)
// card2.takeCredits(50)
// console.log(card1.getCardOptions())
// console.log(card2.getCardOptions())
