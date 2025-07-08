export interface Item {
  imgUrl: string;
  name: string;
  level: number;
  category: string;
  description: string;
}

//list of items to display

export const items: Item[] = [
  {
    imgUrl: "images/items/boosts/rocket_boost.png",
    name: "Rocket Boost",
    level: 1,
    category: "boost",
    description: "increase your speed by 100% for 3 seconds",
  },
  {
    imgUrl: "images/items/boosts/double_rocket_boost.png",
    name: "Double Rocket Boost",
    level: 2,
    category: "boost",
    description: "increase your speed by 200% for 3 seconds",
  },
  {
    imgUrl: "images/items/boosts/flying_rocket_boost.png",
    name: "Flying Rocket Boost",
    level: 3,
    category: "boost",
    description:
      "increase your speed by 300% for 3 seconds, lifts character up in the air",
  },
  {
    imgUrl: "images/items/boosts/warp_boost.png",
    name: "Upgraded Boost",
    level: 4,
    category: "boost",
    description:
      "jump through a warp portal and move your kart up 3 map checkpoints",
  },
  {
    imgUrl: "images/items/shields/level_one.png",
    name: "4 Second Shield",
    level: 1,
    category: "defense",
    description: "Become invulnerable for 4 seconds",
  },
  {
    imgUrl: "images/items/shields/level_two.png",
    name: "6 Second Shield",
    level: 2,
    category: "defense",
    description: "Become invulnerable for 6 seconds",
  },
  {
    imgUrl: "images/items/shields/level_three.png",
    name: "8 Second Shield",
    level: 3,
    category: "defense",
    description: "Become invulnerable for 8 seconds",
  },
  {
    imgUrl: "images/items/shields/level_four.png",
    name: "10 Second Shield",
    level: 4,
    category: "defense",
    description: "Become invulnerable for 10 seconds",
  },
  {
    imgUrl: "images/items/pucks/puck.png",
    name: "Puck",
    level: 1,
    category: "offense",
    description:
      "A tier one (base) level offensive projective, If player is hit with a puck, they are slowed down",
  },
  {
    imgUrl: "images/items/pucks/puck_upgraded.png",
    name: "Homing Spikey Puck",
    level: 2,
    category: "offense",
    description:
      "A tier two level offensive projective, Will auto go to next player ahead and hit them",
  },
  {
    imgUrl: "images/items/pucks/triple_homing_puck.png",
    name: "Triple Homing Pucks",
    level: 3,
    category: "offense",
    description:
      "A tier three level offensive projective, will use three pucks with the same features of Homing Spikey Puck",
  },
  {
    imgUrl: "images/items/pucks/flying_puck.png",
    name: "Flying Puck",
    level: 4,
    category: "offense",
    description:
      "A level four (Final/Max) offensive projective, will go attack the player in first",
  },
  {
    imgUrl: "images/items/fake/spill.png",
    name: "Spill",
    level: 1,
    category: "trap",
    description:
      "When Placed down if a player goes over it, slips on the oil and is slowed down",
  },
  {
    imgUrl: "images/items/fake/cracked_brick-wall.png",
    name: "Cracked Brick Wall",
    level: 2,
    category: "trap",
    description: "TBD",
  },
  {
    imgUrl: "images/items/fake/spill_upgraded.png",
    name: "Confused Ritchie",
    level: 3,
    category: "trap",
    description: "Reverses control if drove into",
  },
  {
    imgUrl: "images/items/fake/fake_item_box.png",
    name: "Fake Power Up Block",
    level: 4,
    category: "trap",
    description: "Mimics a normal power up block but causes stun/slow down",
  },
];
