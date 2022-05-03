import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function randInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function differentInt(min, max, x) {
  let i = randInt(min, max)
  while (i === x) {
    i = randInt(min, max)
  }
  return i
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

const MostVotesDisplay = ({ anecdotes, points }) => {
  let max = Math.max(...points);
  let maxVoteIndex = points.indexOf(Math.max(...points));
  if (max === 0) return <div>No votes for any anecdotes yet!</div>;
  else
    return (
      <div>
        <p>{anecdotes[maxVoteIndex]}</p>
        <p>{points[maxVoteIndex]}</p>
      </div>
    );
};

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length));
  console.log(selected)
  console.log(votes)
  // log the max value of the array votes

  const vote = (i) => {
    const newVotes = [ ...votes ]
    newVotes[i] += 1
    setVotes(newVotes)
  }


return (
  <div>
    <h1> Anecdote of the day </h1>
    {props.anecdotes[selected]}
    <p>
      {votes[selected]}
    </p>
    <p>
      <Button handleClick={() => vote(selected)} text="vote" />
      <Button handleClick={() => setSelected(differentInt(0, props.anecdotes.length - 1, selected))} text="Next anecdote" />
    </p>
    <h1> Anecdote with most votes </h1>
    <MostVotesDisplay anecdotes={props.anecdotes} points={votes} />
  </div>
)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
