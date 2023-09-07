// pages/blog/[id].js
import { useRouter } from 'next/router';
import BlogPost from '@/components/BlogPost';
import blogsData from '@/blogdata/blogs.json'; // Import your blog data

const BlogPage = ({ blog }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until the client-side navigation occurs.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <BlogPost blog={blog} />;
};

export async function getStaticPaths() {
  // Generate paths for all blogs using their IDs
  const paths = blogsData.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the specific blog post using the ID from params
  const blogId = parseInt(params.id);
  const blog = blogsData.find((blog) => blog.id === blogId);
  return { props: { blog } };
}

export default BlogPage;
