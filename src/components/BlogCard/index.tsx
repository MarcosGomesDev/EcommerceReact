import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const BlogCard: React.FC = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">1 Dec, 2022</p>
                    <h2 className="title">
                        A beautiful sunday morning renaiscesse
                    </h2>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet aliquam.</p>
                    <Link to={''} className="button">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard