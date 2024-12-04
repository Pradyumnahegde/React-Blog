import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ()=>{
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()  // prevents page to refresh when clicked submit or add button
        const blog= {title,body,author}
        setPending(true)
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs', {
                method: 'Post',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                setPending(false)
                console.log('new blog added')
                // navigate(-1)
                navigate('/')
            })
        },1000)
    }
    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                ></input>
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="jane">jane</option>
                </select>
                {!isPending && <button>Add Blogs</button>}
                {isPending && <button>Adding Blogs...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}
export default Create;