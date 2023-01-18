export interface card {
  id: number,
  disabled: boolean,
  title: string,
  subtitle: string,
  weight: string,
  weightType: string,
  description: {
    portions: number,
    gift: string,
    happy?: string,
  },
  footer: string,
  footerDisabled(): React.ReactNode,
}

export interface CardComponent {
  data: card,
}

export interface ICardInner {
  data: card,
  type: cardState | 'disabled',
}

export interface ICardWeight {
  data: card,
  type: cardState | 'disabled',
  cardHover?: boolean,
  initialHover?: boolean,
}

export type cardState = 'default' | 'selected';