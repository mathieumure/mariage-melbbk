export type Building = 'B' | 'C' | 'E';
export type Room = number;
export type Attendee = {
  id: number;
  name: string;
  room: `${Building}${Room}`;
};

export const attendees: Array<Attendee> = [
  {
    id: 1,
    name: 'Mel',
    room: 'B1',
  },
  {
    id: 2,
    name: 'Arnaud',
    room: 'E1',
  },
  {
    id: 3,
    name: 'Martine',
    room: 'B1',
  },
  {
    id: 4,
    name: 'Thierry',
    room: 'B1',
  },
  {
    id: 5,
    name: 'Emmelyne',
    room: 'B2',
  },
  {
    id: 6,
    name: 'Geo',
    room: 'B2',
  },
  {
    id: 7,
    name: 'Nath',
    room: 'B2',
  },
  {
    id: 8,
    name: 'Maryse',
    room: 'B2',
  },
  {
    id: 9,
    name: 'Gilles',
    room: 'C1',
  },
  {
    id: 10,
    name: 'Antoine',
    room: 'C1',
  },
  {
    id: 11,
    name: 'Sanjay',
    room: 'C1',
  },
  {
    id: 12,
    name: 'Jere',
    room: 'C1',
  },
  {
    id: 13,
    name: 'Orlane',
    room: 'C2',
  },
  {
    id: 14,
    name: 'Coco',
    room: 'C2',
  },
  {
    id: 15,
    name: 'Yolene',
    room: 'C2',
  },
  {
    id: 16,
    name: 'Dylan',
    room: 'C2',
  },
  {
    id: 17,
    name: 'Eric',
    room: 'C3',
  },
  {
    id: 18,
    name: 'Celine',
    room: 'C3',
  },
  {
    id: 19,
    name: 'Manon',
    room: 'C3',
  },
  {
    id: 20,
    name: 'Lucy',
    room: 'C3',
  },
  {
    id: 21,
    name: 'Chloé',
    room: 'E1',
  },
  {
    id: 22,
    name: "L'éric",
    room: 'E1',
  },
  {
    id: 23,
    name: 'Patou',
    room: 'E1',
  },
  {
    id: 24,
    name: 'Gilles',
    room: 'E1',
  },
  {
    id: 25,
    name: 'Eliane',
    room: 'E2',
  },
  {
    id: 26,
    name: 'Marine',
    room: 'E2',
  },
  {
    id: 27,
    name: 'Nico',
    room: 'E2',
  },
  {
    id: 28,
    name: 'Loïc',
    room: 'E2',
  },
  {
    id: 29,
    name: 'Juliette',
    room: 'B3',
  },
  {
    id: 30,
    name: 'Corinne',
    room: 'B3',
  },
  {
    id: 31,
    name: 'Patrick',
    room: 'B3',
  },
  {
    id: 32,
    name: 'Ornella',
    room: 'B3',
  },
  {
    id: 33,
    name: 'Eric',
    room: 'B3',
  },
  {
    id: 34,
    name: 'Menie',
    room: 'B3',
  },
  {
    id: 35,
    name: 'Alexandra',
    room: 'B3',
  },
  {
    id: 36,
    name: 'Bruno',
    room: 'B3',
  },
  {
    id: 37,
    name: 'Tristan',
    room: 'B5',
  },
  {
    id: 38,
    name: 'Louane',
    room: 'B5',
  },
  {
    id: 39,
    name: 'Ines',
    room: 'B5',
  },
  {
    id: 40,
    name: 'Bernard',
    room: 'B5',
  },
  {
    id: 41,
    name: 'Julie',
    room: 'C4',
  },
  {
    id: 42,
    name: 'Fred',
    room: 'C4',
  },
  {
    id: 43,
    name: 'Tatie Chanto',
    room: 'C4',
  },
  {
    id: 44,
    name: 'Jezabel',
    room: 'C4',
  },
  {
    id: 45,
    name: 'Lionel',
    room: 'C5',
  },
  {
    id: 46,
    name: 'Fabien',
    room: 'C5',
  },
  {
    id: 47,
    name: 'Audrey',
    room: 'C5',
  },
  {
    id: 48,
    name: 'Jean baptist',
    room: 'C5',
  },
  {
    id: 49,
    name: 'Tamtam',
    room: 'E3',
  },
  {
    id: 50,
    name: 'Flo',
    room: 'E3',
  },
  {
    id: 51,
    name: 'Jujuberlu',
    room: 'E3',
  },
  {
    id: 52,
    name: 'Marie Berlu',
    room: 'E3',
  },
  {
    id: 53,
    name: 'NT',
    room: 'E4',
  },
  {
    id: 54,
    name: 'Laura',
    room: 'E4',
  },
  {
    id: 55,
    name: 'Ahcene',
    room: 'E4',
  },
  {
    id: 56,
    name: 'Celia',
    room: 'E4',
  },
  {
    id: 57,
    name: 'Dada Gille',
    room: 'E6',
  },
  {
    id: 58,
    name: 'Mide',
    room: 'E6',
  },
  {
    id: 59,
    name: 'Chach',
    room: 'E6',
  },
  {
    id: 60,
    name: 'Colin',
    room: 'E6',
  },
  {
    id: 61,
    name: 'Elise',
    room: 'B6',
  },
  {
    id: 62,
    name: 'Martial',
    room: 'B6',
  },
  {
    id: 63,
    name: 'Jero',
    room: 'B6',
  },
  {
    id: 64,
    name: 'Aurélien',
    room: 'B6',
  },
  {
    id: 65,
    name: 'Lulu',
    room: 'C1',
  },
  {
    id: 66,
    name: 'Romain',
    room: 'C1',
  },
  {
    id: 67,
    name: 'Fafa',
    room: 'C1',
  },
  {
    id: 68,
    name: 'Rémi',
    room: 'C1',
  },
  {
    id: 69,
    name: 'Andréa',
    room: 'C1',
  },
  {
    id: 70,
    name: 'Seb',
    room: 'C1',
  },
  {
    id: 71,
    name: 'Zam',
    room: 'C1',
  },
  {
    id: 72,
    name: 'Mout',
    room: 'C1',
  },
  {
    id: 73,
    name: 'Jean',
    room: 'C1',
  },
  {
    id: 74,
    name: 'Mike',
    room: 'C1',
  },
  {
    id: 75,
    name: 'Lauriane',
    room: 'C1',
  },
  {
    id: 76,
    name: 'Taye',
    room: 'C1',
  },
  {
    id: 77,
    name: 'copine Tay',
    room: 'C1',
  },
  {
    id: 78,
    name: 'Gweltou',
    room: 'C1',
  },
  {
    id: 79,
    name: 'Charline',
    room: 'C1',
  },
  {
    id: 80,
    name: 'Syssou',
    room: 'C1',
  },
  {
    id: 81,
    name: 'Julie',
    room: 'C1',
  },
  {
    id: 82,
    name: 'Momotte',
    room: 'C1',
  },
  {
    id: 83,
    name: 'Alice',
    room: 'C1',
  },
  {
    id: 84,
    name: 'Yves',
    room: 'C1',
  },
  {
    id: 85,
    name: 'Bichou',
    room: 'C1',
  },
  {
    id: 86,
    name: 'Christian',
    room: 'C1',
  },
  {
    id: 87,
    name: 'Bastou',
    room: 'C1',
  },
  {
    id: 88,
    name: 'Magalie',
    room: 'C1',
  },
  {
    id: 89,
    name: 'Farel',
    room: 'C1',
  },
  {
    id: 90,
    name: 'Charlotte',
    room: 'C1',
  },
  {
    id: 91,
    name: 'Fanny',
    room: 'C1',
  },
  {
    id: 92,
    name: 'Nanou',
    room: 'C1',
  },
  {
    id: 93,
    name: 'Vincent',
    room: 'C1',
  },
  {
    id: 94,
    name: 'Ben',
    room: 'C1',
  },
  {
    id: 95,
    name: 'Maellie',
    room: 'C1',
  },
  {
    id: 96,
    name: 'Dudu',
    room: 'C1',
  },
  {
    id: 97,
    name: 'Clothilde',
    room: 'C1',
  },
  {
    id: 98,
    name: 'Yang',
    room: 'C1',
  },
  {
    id: 99,
    name: 'Francis',
    room: 'C1',
  },
  {
    id: 100,
    name: 'Charly',
    room: 'C1',
  },
  {
    id: 101,
    name: 'Guillaume',
    room: 'C1',
  },
  {
    id: 102,
    name: 'Caro',
    room: 'C1',
  },
  {
    id: 103,
    name: 'Quent',
    room: 'C1',
  },
];
