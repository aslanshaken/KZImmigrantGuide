import './BlogDescription.css'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function BlogDescription(props) {
    const { blogs } = props
    const { id } = useParams();
    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }
    return (
        <div>

            {blogs.map((blog) => {
                if (blog?.blog.id == id) {
                    return (
                        <div className="blog-description-main-container">
                            <img className='blog-description-img' src={!blog.image ? "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" : blog.image?.url} />
                            <h2>{blog.blog.title}</h2>
                            <div className="blog-description-info">
                                <h3>{filterDate(blog.blog.updated_at)}</h3>
                                <h3>{blog.blog.name}</h3>
                                <h3>{blog.blog.email}</h3>
                            </div>
                            <p className="blog-description-about">{blog.blog.description} </p>
                            <Link to="/blogs" id="none"><h3>Go back</h3></Link>
                        </div>
                    )
                } else {
                    <h2>Loading...</h2>
                }
            })}
        </div>
    )
}