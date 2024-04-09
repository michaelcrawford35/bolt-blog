import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="title">Sorry!</h2>
            <p>That page cannot be found.</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound