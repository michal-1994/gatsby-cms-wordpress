import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

import { Link } from "gatsby"

const Blog = ({ data }) => {
    return (    
        <Layout>
            <h4>Posts</h4>
            {data.allWpPost.nodes.map(node => (
                <Post 
                    key = { node.id }
                    slug = { node.slug }
                    title = { node.title }
                    date = { node.date }
                    excerpt = { node.excerpt }
                    categories = { node.categories.nodes }
                    featuredImage = { node.featuredImage }
                />
            ))}
            <Link to={ "/" }>Retrun to home</ Link>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
query {
    allWpPost(
            sort: { fields: [date], order: DESC }
            limit: 10
        ) {
        nodes {
            id
            title
            date(formatString: "DD MMMM YYYY", locale: "pl-PL")
            excerpt
            slug
            categories {
                nodes {
                    id
                    name
                }
            }
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    }
}`