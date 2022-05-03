import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Header = ({ title }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   )
// }

const Button = ({ text, callback }) =>
  <button onClick={callback}>
    {text}
  </button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <h4> No feedback given </h4>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>

      <table>
        <thead>
          <tr>
            <td>Parameter   | </td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr><Statistic text="good" value={good} /></tr>
          <tr><Statistic text="neutral" value={neutral} /></tr>
          <tr><Statistic text="bad" value={bad} /></tr>
          <tr><Statistic text="all" value={total} /></tr>
          <tr><Statistic text="average" value={average} /></tr>
          <tr><Statistic text="positive" value={positive.toString() + '%'} /></tr>
        </tbody>
      </table>
    </div>
  )
}
const Statistic = ({ text, value }) => (
  <>
    <td> {text} </td>
    <td> {value} </td>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>

      <Button text="good" callback={() => setGood(good + 1)} />
      <Button text="neutral" callback={() => setNeutral(neutral + 1)} />
      <Button text="bad" callback={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)