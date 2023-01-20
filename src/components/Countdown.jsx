import './Countdown.css';

export const Countdown = ({title, number}) => {
  return (
    <div className='countdown'>
        <p className='countdown-number'>{number}</p>
        <h3 className="counter-text">{title}</h3>
    </div>
  )
}
