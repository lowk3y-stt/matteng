export const tests = [
  {
    id: 'tenses',
    title: 'Времена',
    icon: 'clock',
    questions: [
      { q: 'She ___ to work by bus every day.', options: ['goes', 'is going', 'go'], answer: 0 },
      { q: 'Look! It ___ outside.', options: ['rains', 'is raining', 'rained'], answer: 1 },
      { q: 'I ___ my keys yesterday.', options: ['lose', 'lost', 'have lost'], answer: 1 },
      { q: 'We ___ here since 2020.', options: ['live', 'lived', 'have lived'], answer: 2 },
      { q: 'When I called, they ___ dinner.', options: ['had', 'were having', 'have'], answer: 1 },
      { q: 'Tomorrow I ___ my grandmother.', options: ['am visiting', 'visited', 'have visited'], answer: 0 }
    ]
  },
  {
    id: 'articles',
    title: 'Артикли',
    icon: 'book',
    questions: [
      { q: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the'], answer: 1 },
      { q: '___ sun rises in the east.', options: ['A', 'An', 'The'], answer: 2 },
      { q: 'She is ___ engineer.', options: ['a', 'an', 'the'], answer: 1 },
      { q: 'He plays ___ guitar very well.', options: ['a', 'the', 'no article'], answer: 1 },
      { q: 'I love ___ music.', options: ['the', 'a', 'no article'], answer: 2 },
      { q: 'We stayed at ___ hotel near the station.', options: ['a', 'an', 'the'], answer: 0 }
    ]
  },
  {
    id: 'prepositions',
    title: 'Предлоги',
    icon: 'target',
    questions: [
      { q: 'The meeting is ___ Monday.', options: ['in', 'on', 'at'], answer: 1 },
      { q: 'She was born ___ 1998.', options: ['on', 'at', 'in'], answer: 2 },
      { q: 'I’ll see you ___ five o’clock.', options: ['at', 'on', 'in'], answer: 0 },
      { q: 'He is good ___ maths.', options: ['at', 'in', 'on'], answer: 0 },
      { q: 'We arrived ___ the airport early.', options: ['to', 'at', 'in'], answer: 1 },
      { q: 'She is afraid ___ spiders.', options: ['from', 'of', 'for'], answer: 1 }
    ]
  }
];
