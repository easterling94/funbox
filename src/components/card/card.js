import styles from './card.module.css'

export const Card = ({data}) => {
  return (
    <div className={styles.card}>
      <p>{data.textDefault}</p>
      <h2>{data.title}</h2>
      <h3>{data.subtitle}</h3>
      <ul>
        <li>{data.description.portions} порций</li>
        <li>{data.description.gift}</li>
      </ul>
    </div>
  )
}