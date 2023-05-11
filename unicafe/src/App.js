import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  const total = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / total
  const positive = (good / total) * 100
 
  return (
    <div>
      <h2>Statistis</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="All" value={total}/>
          <StatisticLine text="Average" value={average}/>
          <StatisticLine text="Positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}


function App() {
  const [reviews, setReview] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const setGoodReview = () => {
    console.log('Updating Good Review')
    setReview({...reviews, good: reviews.good + 1})
  }
  const setNeutralReview = () => {
    console.log('Updating Neutral Review')
    setReview({...reviews, neutral: reviews.neutral + 1})
  }
  const setBadReview = () => {
    console.log('Updating Bad Review')
    setReview({...reviews, bad: reviews.bad + 1})
  }

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button handleClick={setGoodReview} text="good" />
      <Button handleClick={setNeutralReview} text="neutral" />
      <Button handleClick={setBadReview} text="bad" />
      <Statistics good={reviews.good} neutral={reviews.neutral} bad={reviews.bad} />
    </div>
  )
}

export default App;
