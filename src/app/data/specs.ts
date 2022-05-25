export interface Spec {
  specialization: string;
  spells:Array<string>;
  description: string;
}

export const specs = [
  {
    specialization: "sorcerer",
    spells : ["thunderbolt","sleep","curse"],
    description : "Mages who can wield staves and summon the power of thunder."
  },
  {
    specialization: "warrior",
    spells : ["berserk","knockout","shout"],
    description : "Soldiers who excel in martial arts."
  }
];
