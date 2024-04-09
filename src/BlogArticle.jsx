import { useNavigate } from 'react-router-dom';
import './BlogArticle.css'

const BlogArticle = ({ blog }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3000/blogs/${blog.id}`, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <article>
            <h2 className="title">{ blog.title }</h2>
            <p className="author">Written by { blog.author }</p>
            <div className="blog-content">{ blog.body }</div>
            <button className="delete-blog-btn" onClick={handleDelete}>Delete Blog</button>
        </article>
    );
}
 
export default BlogArticle