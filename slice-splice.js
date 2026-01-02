// const friends = [
//   "Protap",
//   "Biplob",
//   "Rajib",
//   "Kajol",
//   "Mithila",
//   "Popy",
//   "Tithi",
// ];

// let update = friends.slice(1, 5);
// console.log(update);

const friends = [
  "Protap",
  "Biplob",
  "Rajib",
  "Kajol",
  "Mithila",
  "Popy",
  "Tithi",
];

friends.splice(1, 5, "Chayan");
console.log(friends);

const members = [
  "Protap",
  "Biplob",
  "Rajib",
  "Kajol",
  "Mithila",
  "Popy",
  "Tithi",
];

let mod = members.join("------");
console.log(members);
console.log(mod);
