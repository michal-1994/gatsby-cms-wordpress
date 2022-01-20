import React from "react";
import { Link } from "gatsby";
import Category from "../components/category";
import Img from "gatsby-image"

import './post.css';

const Post = ({title, slug, date, excerpt, categories, featuredImage}) => {

    const imgUrl = (featuredImage !== null) ? console.log(featuredImage.node.sourceUrl) : '';

    return (
        <div className="post">

            {/* Img url testing */}
            <Img fixed={imgUrl} />

            <Link to={"/" + slug}><h3>{ title }</h3></Link>
            <small>{ date }</small>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            
            {categories.map(category => (
                <Category
                    key= { category.id } 
                    categoryName = { category.name }
                />
            ))}
        </div>
    )
}

export default Post;