// added this so future Ricardo doesn't have to
// export function rolld100() {
//     return Math.random() * (1 - 100) + 1;
// }

export function rollItemsInArray(
  itemGroups,
  gossipScore,
  roll,
  populationModifier
) {
  const availableItems = [];
  itemGroups.forEach((group) => {
    const availableGroupItems = [];
    const { label, key, groupItems } = group;
    groupItems.forEach((item) => {
      const modifiedAvailabity =
        parseInt(populationModifier) + item.availability;
      switch (modifiedAvailabity) {
        case 1:
          if (gossipScore - 30 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 2:
          if (gossipScore - 20 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 3:
          if (gossipScore - 10 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 4:
          if (gossipScore >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 5:
          if (gossipScore + 10 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 6:
          if (gossipScore + 20 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        case 7:
          if (gossipScore + 30 >= roll) {
            availableGroupItems.push(item);
          }
          break;
        default:
          if (item.availability > 7) {
            availableGroupItems.push(item);
          }
          break;
      }
    });
    const filteredGroupObject = {
      key: key,
      label: label,
      availableGroupItems: availableGroupItems,
    };
    availableItems.push(filteredGroupObject);
  });
  return availableItems;
}
