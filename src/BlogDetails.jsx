import { useParams } from 'react-router-dom';
import './BlogDetails.css'
import useFetch from './useFetch';
import BlogArticle from './BlogArticle';

const BlogDetails = () => {
    const { id } = useParams();

    const { data: blog, isLoading, error} = useFetch(`/blogs/${id}`)

    return (
        <div className="blog-details">
            { isLoading && <div className="loading">Loading! Please hold....</div> }
            { error && <div className="error">Error: {error}</div> }
            { blog && <BlogArticle blog={blog} /> }
        </div>
    );
}
 
export default BlogDetails;