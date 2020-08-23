const rolld100 = () => {
  return Math.random() * 100 + 1;
};

export const rollItemsInArray = (
  itemGroups,
  gossipScore,
  roll,
  populationModifier,
  autoRoll,
  individualAutoRoll
) => {
  const availableItems = [];
  let diceRoll = autoRoll ? rolld100() : roll;
  itemGroups.forEach((group) => {
    const availableGroupItems = [];
    const { label, key, groupItems } = group;
    groupItems.forEach((item) => {
      const modifiedAvailabity =
        parseInt(populationModifier) + item.availability;
      switch (modifiedAvailabity) {
        case 1:
          if (autoRoll && individualAutoRoll) {
            diceRoll = rolld100();
          }
          if (gossipScore - 30 >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 2:
          if (gossipScore - 20 >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 3:
          if (gossipScore - 10 >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 4:
          if (gossipScore >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 5:
          if (gossipScore + 10 >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 6:
          if (gossipScore + 20 >= diceRoll) {
            availableGroupItems.push(item);
          }
          break;
        case 7:
          if (gossipScore + 30 >= diceRoll) {
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
};
