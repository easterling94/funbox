import { Card } from '../card/card';
import styles from './app.module.css';
import { data } from '../../source/cards-source';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <section className={styles.cards}>
        {data.map((el) => (
          <Card data={el} key={el.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
