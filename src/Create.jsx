import { useState } from 'react';
import './Create.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Collin Vossman");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:3000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New blog created!")
            setIsPending(false);
            navigate('/');
        });

    }

    return (
        <div className="create">
            <h2 className="title">Add a New Blog</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <label className="blog-title">Blog Title:</label>
                <input
                    type="text"
                    required
                    className="title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="blog-title">Blog Body:</label>
                <textarea
                    required
                    className="body-input"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                <select
                    className="author-select"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Collin">Collin</option>
                    <option value="Caroline">Caroline</option>
                    <option value="Cody">Cody</option>
                </select>
                
                { !isPending && <button className="add-blog-btn">Add Blog</button> }
                { isPending && <button className="add-blog-btn" disabled>Saving...</button> }
            </form>
        </div>
    );
}
 
export default Create