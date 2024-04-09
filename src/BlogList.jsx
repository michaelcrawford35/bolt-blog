import { Link } from 'react-router-dom';
import './BlogList.css'

const BlogList = ({ blogs, title }) => {
    return (
        <div className='blog-list'>
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className="title">{blog.title}</h2>
                        <div className="author">Written by {blog.author}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;