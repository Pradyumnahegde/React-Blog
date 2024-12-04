import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar">
            <h1>Menu</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <div className='links'>
                <Link to="/">Home</Link></div>
                <Link to="/create" >New Blog</Link>  {/* {{}} is used to add inline css in react */}
                </div>
                
        </nav>
    )
}

export default Navbar