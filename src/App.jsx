import {
  BrowserRouter as Router,
  Routes, Route, Link,
  useParams,
  useNavigate
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
)

const Note = ({ notes }) => {
  const id = useParams().id
  const note = notes.find( n => n.id === Number(id) )
  return(
    <div>
      <h2>{ note.content }</h2>
      <div>{ note.user }</div>
      <div><strong>{ note.important ? 'important' : '' }</strong></div>
    </div>
  )
}

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      { notes.map( note => 
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{ note.content }</Link>
        </li>  
      )}
    </ul>
  </div>
)

const Users = () => (
  <div>
    <h2>Users</h2>
    <ul>
      <li>Matti Luukkainen</li>
      <li>Juha Tauriainen</li>
      <li>Arto Hellas</li>
    </ul>
  </div>
)

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return(
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username
          <input />
        </div>
        <div>
          password
          <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

function App() {

  const padding = { padding: 5 }

  return (
    <Router>
      <div>
        <Link style={padding} to='/'>home</Link>
        <Link style={padding} to='/notes'>notes</Link>
        <Link style={padding} to='/users'>users</Link>
      </div>

      <Routes>
        <Route path='/notes' element={ <Notes /> } />
        <Route path='/users' element={ <Users /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
  )
}

export default App