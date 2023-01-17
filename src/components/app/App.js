import { Card } from '../card/card';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <Card />
    </div>
  );
}

export default App;
