
import './App.css'
import Todo from './components/Task'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
  <a style={{marginLeft:"2%"}} className="navbar-brand" href="#">
    Todo Application
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
   
     
    </ul>
  </div>
</nav>

      <Todo/>
    </>
  )
}

export default App
