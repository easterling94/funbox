import { Card } from '../card/card';
import styles from './app.module.css'

function App() {
  const data1 = {
    textDefault: 'Сказочное заморское яство',
    title: 'Нямушка',
    subtitle: 'с фуа-гра',
    weight: '0,5 кг',
    description: {
      portions: 10,
      gift: 'мышь в подарок',
    },
  }
  const data2 = {
    textDefault: 'Сказочное заморское яство',
    title: 'Нямушка',
    subtitle: 'с рыбой',
    weight: '2 кг',
    description: {
      portions: 40,
      gift: '2 мыши в подарок',
    },
  }
  const data3 = {
    textDefault: 'Сказочное заморское яство',
    title: 'Нямушка',
    subtitle: 'с курой',
    weight: '5 кг',
    description: {
      portions: 100,
      gift: '5 мышей в подарок',
      happy: 'закзчик доволен',
    },
  }
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <section className={styles.cards}>
        <Card data={data1}/>
        <Card data={data2}/>
        <Card data={data3}/>
      </section>
    </div>
  );
}

export default App;
