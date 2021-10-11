const express = require('express')
const app = express()

app.use(express.json())


let persons =
[
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const getMaxId = () => {
      const maxId = persons.length
      return maxId
    }

const generatedDate = () => {
  const newDate = new Date()
    
  return newDate
}
app.get('/info', (request, response) => {
  response.send('<div><p>Phonebook has info for ' +getMaxId()+ ' people '+generateId()+'</p><p>'+generatedDate()+'</p></div>')
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    // const note = notes.find(note => {
    //   console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    //   return note.id === id
    // })
    // console.log(note)
    // response.json(note)

    const person = persons.find(person => person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })


  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

// ////////////////Post Request Begins Here//////////////////////////
const generateId = () => {
    // const maxId = notes.length > 0
    //   ? Math.max(...notes.map(n => n.id))
    //   : 0
    return Math.floor(Math.random() * 80);
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})