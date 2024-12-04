import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

function App(){
  return(
    <Router>
    <div> 
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App

// React Variables or Dynamic values

// function App() {
//   const title = "React"
//   const likes = 50;
//   const person = {name: 'pph', age: 30}
//   const link = "http://www.google.com"

//   return (
//     <div>
//         <h1>App component</h1>
//         <h2>{title}</h2> {/* Dynamic variable or value in react (variables) can be only used like this with {} */} 
//         <p>Liked {likes} times</p>
//         <p> {person.name} {person.age} </p>
//         <p>{10}</p>
//         <p>{[1,2,3,4,5]}</p>
//         <p>{Math.random() * 10}</p>

//         <a href={link}>Link</a>  {/* instead of html href we can use this way, Dynamic value in html attribute for jsx */}

//     </div>
//   )
// }
