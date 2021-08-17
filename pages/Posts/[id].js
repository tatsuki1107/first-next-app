// http://~~.~~/Posts/[id]
import Layout from "../../Components/Layout"
import { getIds, getPostById } from "../../lib/Posts"

export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    }
}

export default function Post({ post }) {
    return (
        <Layout pageTitle={'Article'}>
            <h2>{post.title}</h2>
            <span>{post.date}</span>
            <p>{post.content}</p>
        </Layout>
    )

}