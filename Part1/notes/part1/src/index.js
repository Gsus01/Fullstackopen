import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1> Saludos </h1>
      <Hello name="patata"/>
      <Hello name="Antonio" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 