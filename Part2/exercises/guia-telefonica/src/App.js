import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456',
      show: true
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      }
    )
  }
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    persons.forEach((person) => {
      if (person.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        || person.number.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) 
        person.show = true
      else
        person.show = false
    })
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (checkName(newName) && checkNumber(newNumber)) {
      const person = {
        name: newName,
        number: newNumber,
        show: true
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
  }

  const checkName = () => {
    if (!persons.map(person => person.name.toLocaleLowerCase()).includes(newName.toLocaleLowerCase())) {
      if (newName === '') {
        alert(`You must define a name`)
        return false
      }
      return true
    } else
      alert(`${newName} is already added to phonebook`)
  }

  const checkNumber = () => {
    if (!persons.map(person => person.number).includes(newNumber)) {
      if (newNumber === '') {
        alert(`You must define a number`)
        return false
      }
      return true
    } else
      alert(`${newNumber} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter show with
        <input value={newFilter} onChange={handleFilterChange} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.show).map(person => <Contact key={person.name} person={person} />)}
    </div>
  )
}

export default App