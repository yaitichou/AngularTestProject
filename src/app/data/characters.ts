export interface Character {
  id: number;
  name: string;
  level: number;
  specialization: string;
  story: string;
}

export const characters = [
  {
    id: 0,
    name: "Filibor",
    level: 10,
    specialization: "sorcerer",
    story: "A great mage from a land far far away. He claims to be a descendant of the elves."
  },
  {
    id: 1,
    name: 'Garen',
    level: 12,
    specialization: "warrior",
    story: "A warrior form the northern lands who set off on a journey."
  }
];
