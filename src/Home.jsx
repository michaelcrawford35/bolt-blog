import './Home.css'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('/blogs');
    
    return (
        <div className="home">
            { isLoading && <div className="loading">Loading! Please hold....</div> }
            { error && <div className="error">Error: {error}</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
    );
}
 
export default Home