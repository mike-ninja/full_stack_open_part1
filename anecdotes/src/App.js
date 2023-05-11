import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>
  
const Display = (props) => (
  <div>
    <p>{props.anecdote}</p>
    <p>Has {props.vote} votes</p>
  </div>
)

const Button = (props) => <button onClick={props.clickHandle}>{props.text}</button>

const MostVoted = (props) => {
  const arr = [...props.votes]
  const index = arr.indexOf(Math.max(...arr));

  return (
    <div>
      <h2>Most Voted</h2>
      <p>{props.anecdotes[index]}</p>
    </div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const selectNewAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    while (randomNumber === selected)
      randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const updateVotes = () => setVote(votes.map((vote, index) => index === selected ? vote + 1 : vote))

  return (
    <div>
      <Header text="Anecdotes"/>
      <Display anecdote={anecdotes[selected]} vote={votes[selected]}/>
      <Button clickHandle={updateVotes} text='Vote'/>
      <Button clickHandle={selectNewAnecdote} text='New Anecdote'/>
      <MostVoted votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App;
