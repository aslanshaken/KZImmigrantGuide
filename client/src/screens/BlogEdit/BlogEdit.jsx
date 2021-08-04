import './BlogEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneBlog } from '../../services/blogs'

export default function BlogEdit(props) {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        description: '',
        email: ''
    })
    const { id } = useParams();
    const { currentUser, blogs, setBlogs } = props
    const history = useHistory();
    const { title, name, description, email } = formData;
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        const prefillFormData = () => {
            const blogPost = blogs.find((blog) => blog.blog.id === Number(id));
            setFormData({
                title: blogPost.blog.title,
                name: blogPost.blog.name,
                description: blogPost.blog.description,
                email: blogPost.blog.email
            });
        }
        if (blogs.length) {
            prefillFormData();
        }
    }, [blogs, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedBlog = await updateOneBlog(id, formData);
        setBlogs(prevState => prevState.map((blog) => {
            return blog.blog.id === Number(id) ? updatedBlog : blog
        }));
        history.push('/account/listings');
    }

    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => {
        if (currentUser?.image === null) {
            return "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg"
        } else {
            return currentUser?.image.url
        }
    }

    return (
        <div className="blog-edit">
            <div className="blog-edit-main-photo">
                <img id="blog-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="blog-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="blog-edit-main-container">
            <div>
                    <img id="blog-edit-img" src={preview ? preview : checkImage()} />
                    <div className="blog-edit-upload-box">
                        <label for="img-input" >
                            <h5 id="blog-edit-text">Update Image</h5>
                        </label>
                        <input
                            id="img-input"
                            type="file"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <form
                    className="blog-edit-box"
                    onSubmit={handleUpdate}
                >
                    <h2>Edit</h2>
                    <label>Title:
                    <input
                            type='text'
                            name='title'
                            value={title}
                            maxLength="35"
                            onChange={handleChange}
                        />
                    </label>
                    <label> Name:
                    <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Description:
                    <textarea
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </label>

                    <br />

                    <div id="blog-edit-button">
                        <Link to="/account/listings" className="blog-edit-button">Go Back</Link>
                        <button className="blog-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}