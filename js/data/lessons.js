export default {
  'grammar-in-use': {
    1: {
      theory: [
        {
          form: 'am / is / are + глагол-ing',
          text: 'Образуется из am, is или are и глагола с окончанием -ing.',
          examples: ['I am working.', 'She is cooking dinner.', 'They are not (aren’t) listening.']
        },
        {
          text: 'Говорим о том, что происходит прямо сейчас, в момент речи.',
          examples: ['Please be quiet, the baby is sleeping.', 'Why are you laughing?']
        },
        {
          text: 'Также о временных ситуациях, которые длятся в эти дни или недели.',
          examples: ['I’m staying with my cousin this month.', 'Prices are rising.']
        },
        {
          text: 'В вопросе am, is или are выходит на первое место.',
          examples: ['Is he coming?', 'What are you doing?']
        }
      ],
      quiz: [
        { q: 'Listen! Somebody ___ at the door.', options: ['knocks', 'is knocking', 'knock'], answer: 1 },
        { q: 'Where ___ you going?', options: ['do', 'are', 'is'], answer: 1 },
        { q: 'I ___ not working today.', options: ['am', 'is', 'are'], answer: 0 },
        { q: 'She ___ her homework at the moment.', options: ['does', 'is doing', 'do'], answer: 1 },
        { q: 'They ___ for the bus right now.', options: ['wait', 'are waiting', 'is waiting'], answer: 1 }
      ]
    },
    2: {
      theory: [
        {
          text: 'Говорим о том, что происходит регулярно, а также о постоянных фактах.',
          examples: ['I play tennis on Sundays.', 'Water boils at 100 degrees.']
        },
        {
          form: 'he / she / it + глагол-s',
          text: 'В утверждении к he, she и it добавляем -s или -es.',
          examples: ['She works in a bank.', 'He watches the news.']
        },
        {
          text: 'Вопросы и отрицания строим с do или does. После does глагол остаётся без -s.',
          examples: ['Do you like coffee?', 'He doesn’t live here.', 'Does she speak French?']
        },
        {
          text: 'Частые слова-подсказки: always, usually, often, sometimes, never, every day.',
          examples: ['I usually get up at seven.', 'They never eat meat.']
        }
      ],
      quiz: [
        { q: 'My brother ___ football every weekend.', options: ['play', 'plays', 'is playing'], answer: 1 },
        { q: '___ you live near here?', options: ['Do', 'Does', 'Are'], answer: 0 },
        { q: 'She ___ like spicy food.', options: ['don’t', 'doesn’t', 'isn’t'], answer: 1 },
        { q: 'The sun ___ in the east.', options: ['rise', 'rises', 'is rising'], answer: 1 },
        { q: 'How often ___ he visit his parents?', options: ['do', 'does', 'is'], answer: 1 }
      ]
    }
  }
};
