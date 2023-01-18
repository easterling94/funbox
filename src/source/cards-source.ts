import { card } from '../types/types'

export const data: card[] = [
  {
    id: 1,
    disabled: true,
    title: 'Нямушка',
    subtitle: 'с фуа-гра',
    weight: '0,5',
    weightType: 'кг',
    description: {
      portions: 10,
      gift: 'мышь в подарок',
    },
    footer: 'Печень утки разварная с артишоками.',
    footerDisabled() {
      return `Печалька, ${this.subtitle} закончился.`
    } 
  },
  {
    id: 2,
    disabled: false,
    title: 'Нямушка',
    subtitle: 'с рыбой',
    weight: '2',
    weightType: 'кг',
    description: {
      portions: 40,
      gift: '2 мыши в подарок',
    },
    footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    footerDisabled() {
      return `Печалька, ${this.subtitle} закончился.`
    } 
  },
  {
    id: 3,
    disabled: false,
    title: 'Нямушка',
    subtitle: 'с курой',
    weight: '5',
    weightType: 'кг',
    description: {
      portions: 100,
      gift: '5 мышей в подарок',
      happy: 'закзчик доволен',
    },
    footer: 'Филе из цыплят с трюфелями в бульоне.',
    footerDisabled() {
      return `Печалька, ${this.subtitle} закончился.`
    } 
  }
]
