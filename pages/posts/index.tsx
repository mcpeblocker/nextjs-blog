import { NextPage, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import PostPreview from "../../components/posts/PostPreview";
import Post from "../../interfaces/post";

interface PropsWithPosts {
  posts: Post[];
}

const Posts: NextPage<PropsWithPosts> = ({ posts }) => {
  return (
    <Layout>
      <div className="row row-cols-3 justify-content-center mt-3">
        {posts.map((post: Post) => (
          <div key={post.id}>
            <PostPreview post={post} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://api.blog.mcpeblocker.uz/posts");
  const posts = await res.json();

  let mockPosts = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amend...",
      date: "2020-01-01",
      image: "/assets/blog-nextjs.png",
      slug: "how-to-use-nextjs",
    },
  ];

  return {
    props: { posts: mockPosts },
  };
};

export default Posts;
