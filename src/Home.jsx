import { useState, useEffect } from "react";
import BlogList from "./BlogsList";
import useFetch from "./useFetch";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const {
    data,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
    </div>
  );
}

export default Home;

// Props
// const [blogs, setBlogs] = useState([
//   { title: "Javascript", body: "hello world", author: "john", id: 1 },
//   { title: "Python", body: "hello world!", author: "john", id: 2 },
//   { title: "Typescript", body: "hello world!!", author: "moe", id: 3 },
// ]);

// const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   setBlogs(newBlogs);
// };

// return (
//   <div className="home">
//     <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} ></BlogList>
//   </div>
// );

//React Hooks
// Use State (useState Hook)

// const[count,setCount] = useState(0)
// const [name, setName] = useState('steve');
// const[age,setAge] = useState(18)

// function handleClick (){
//    setName('john')
//    setAge(25)
//    setCount(count => count+1 )
// }

// return(
// <>
// <div className="home">
//     <h2>Homepage</h2>
//     <p>{name} is {age} years old</p>
//     <button onClick={handleClick}>Click {count}</button>

// </div>
// </>
// )

// Event handling - Click Events
//     function handleClick(){
//         console.log('Hello')
//     }
//     function clickAgain(name, e){
//         console.log("hello "+ name, e)
//     }

//     function Button(){
//         const clickEvent= ()=>{
//            console.log("button clicked")
//         }
//        return <button onClick={clickEvent}>Button</button>
//     }

//     return(
//         <div className="content">
//             <h2>Homepage</h2>
//             <button onClick={handleClick} >Click me</button>
//             <button onClick={(e) => clickAgain("steve", e)}>Click again</button>

//             <Button />
//         </div>
//     )
