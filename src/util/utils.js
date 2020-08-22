// function rolld100() {
//     return Math.random() * (1 - 100) + 1;
// }

export function rollItemsInArray(itemsArray, gossipScore, roll) {
    const availableItems = [];
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

export const populationBrackets = [
    {
        label: 'Below 100',
        value: 'low'
    },
    {
        label: 'Below 1,000',
        value: 'average'
    },
    {
        label: 'Below 10,000',
        value: 'high'
    },
    {
        label: '10,000 or more',
        value: 'vhigh'
    }
]