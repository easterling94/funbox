import styles from './card.module.scss';
import { CardComponent, ICardWeight, ICardInner } from '../../types/types';
import { FC } from 'react';
import { useState } from 'react';
import { cardState } from '../../types/types';

const CardInner: FC<ICardInner> = ({ data, type }) => {
  return (
    <section
      className={
        type === 'default' || type === 'selected'
          ? styles.cardDescriptionNotDisabled
          : styles.cardDescriptionDisabled
      }
    >
      <p className={styles.textDefault}>{}Сказочное заморское яство</p>
      <h2 className={styles.title}>{data.title}</h2>
      <h3 className={styles.subtitle}>{data.subtitle}</h3>
      <ul className={styles.description}>
        <li className={styles.portions}>{data.description.portions} порций</li>
        <li className={styles.gift}>{data.description.gift}</li>
        {data.description.happy ? (
          <li className={styles.happy}>{data.description.happy}</li>
        ) : (
          ''
        )}
      </ul>
    </section>
  );
};

const CardWeight: FC<ICardWeight> = ({ data, type }) => {
  return (
    <div
      className={
        type === 'default'
          ? styles.weightStateDefault
          : type === 'selected'
          ? styles.weightStateSelected
          : type === 'disabled'
          ? styles.weightStateDisabled
          : ''
      }
    >
      <p className={styles.weightAmount}>{data.weight}</p>
      <p className={styles.weightType}>{data.weightType}</p>
    </div>
  );
};

export const Card: FC<CardComponent> = ({ data }) => {
  const [isItemDisabled, setItemDisabled] = useState(data.disabled);
  const [cardState, setCardState] = useState<cardState>('default');
  const [cardHover, setCardHover] = useState<boolean>(false);
  const [initialHover, setInitialHover] = useState<boolean>(true);

  const handleClick = () => {
    setInitialHover(true);
    if (cardState === 'default') {
      setCardState('selected');
      return;
    }
    if (cardState === 'selected') {
      setCardState('default');
      return;
    }
  };
  const handeOnMouseEnter = () => {
    if (initialHover) {
      setInitialHover(false);
      setCardHover(true);
    }
    if (!initialHover) {
      setCardHover(true);
    }
  };
  const handeOnMouseLeave = () => {
    if (initialHover) {
      setInitialHover(false);
      setCardHover(false);
    }
    if (!initialHover) {
      setCardHover(false);
    }
  };
  return (
    <>
      {isItemDisabled ? (
        <div>
          <div className={styles.cardStateDisabled}>
            <CardInner data={data} type='disabled' />
            <CardWeight data={data} type='disabled' />
          </div>
          <p className={styles.footerDisabled}>{data.footerDisabled()}</p>
        </div>
      ) : cardState === 'default' ? (
        <div>
          <div
            className={
              cardHover && !initialHover
                ? styles.cardStateDefaultHover
                : styles.cardStateDefault
            }
            onClick={handleClick}
            onMouseEnter={handeOnMouseEnter}
            onMouseLeave={handeOnMouseLeave}
          >
            <CardInner data={data} type='default' />
            <CardWeight
              data={data}
              type='default'
              cardHover={cardHover}
              initialHover={initialHover}
            />
          </div>
          <p className={styles.footer}>
            Чего сидишь? Порадуй котэ,{' '}
            <span className={styles.link} onClick={handleClick}>
              купи.
            </span>
          </p>
        </div>
      ) : cardState === 'selected' ? (
        <div>
          <div
            className={
              cardHover && !initialHover
                ? styles.cardStateSelectedHover
                : styles.cardStateSelected
            }
            onClick={handleClick}
            onMouseEnter={handeOnMouseEnter}
            onMouseLeave={handeOnMouseLeave}
          >
            <CardInner data={data} type='selected' />
            <CardWeight
              data={data}
              type='selected'
              cardHover={cardHover}
              initialHover={initialHover}
            />
          </div>
          <p className={styles.footer}>{data.footer}</p>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
