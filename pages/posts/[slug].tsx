import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import Layout from "../../components/Layout";

const Post: FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <Layout>
        Post: {slug}
    </Layout>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const res = await fetch("http://api.blog.mcpeblocker.uz/posts/" + context.params?.slug);
    const post = await res.json();
    return {
        props: {
            post
        }
    };
}

export default Post;