// function rolld100() {
//     return Math.random() * (1 - 100) + 1;
// }

export function rollItemsInArray(itemsArray, gossipScore, roll) {
    const availableItems = [];
    // eslint-disable-next-line no-unused-vars
    let modifiedRoll;
    itemsArray.forEach(item => {
        switch (item.availability) {
            case 1:
                if ((gossipScore - 30 >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 2:
                if ((gossipScore - 20 >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 3:
                if ((gossipScore - 10 >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 4:
                if ((gossipScore >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 5:
                if ((gossipScore + 10 >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 6:
                if ((gossipScore + 20 >= roll)) {
                    availableItems.push(item)
                }
                break;
            case 7:
                if ((gossipScore + 30 >= roll)) {
                    availableItems.push(item)
                }
                break;
            default:
                break;
        }
    })
    return availableItems;
}