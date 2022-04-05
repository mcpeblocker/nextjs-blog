import { FC } from "react";
import PostPreview from "../posts/PostPreview";

let posts = [
  {
    id: 1,
    title: "How to use Next.js",
    // description: 'Learn that',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet molestie nisl. Sed interdum condimentum enim, pharetra eleifend est euismod auctor. Nam in luctus quam. Aenean posuere sem id purus venenatis, nec finibus lacus finibus. Vivamus viverra at nisl ac tincidunt. Ut quis nibh augue. Donec at lacus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur nec odio sit amet dui feugiat dapibus ut eu neque. Suspendisse a ultricies augue, quis rutrum velit. Mauris convallis sagittis turpis, vel iaculis dui consequat eget. Pellentesque sed diam ac dui rutrum sodales. Vestibulum posuere congue placerat. Morbi et dui elementum, sollicitudin tortor vitae, consectetur sapien. Quisque finibus justo nec ullamcorper tincidunt. Proin maximus pulvinar mi euismod sodales. ",
    date: "2020-01-01",
    image: "/assets/blog-nextjs.png",
    slug: "how-to-use-nextjs",
  },
];

const Recommendations: FC = () => {
  return (
    <div>
      <PostPreview type="horizontal" post={posts[0]} />
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <PostPreview post={posts[0]} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <PostPreview post={posts[0]} />
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <PostPreview post={posts[0]} />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
