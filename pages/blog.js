import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import BlogsData from '@/blogdata/blogs.json';

const Blog = ({ blogs }) => {
  // const [blog, setBlog] = useState(blogs);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Blogs</h1>
      <ul className={styles.bloglist}>
        {blogs.map((blog) => {
          return (
            <div className={styles.blogList}>
            <li key={blog.id} className={styles.blogtheme}>
            <Link href={`/blog/${blog.id}`}> <h2 className={styles.title}>{blog.title}</h2> </Link>
           <p className={styles.content}> {blog.content.slice(0, 300)} </p> 
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from your API route
//   const response = await fetch("http://localhost:3000/api/getblogs");
//   const blogs = await response.json();
//   console.log(blogs)

//   // Pass the blog data as a prop
//   return {
//     props: {
//       blogs,
//     },
//   };
// }
export async function getServerSideProps() {
  return {
    props: {
      blogs: BlogsData,
    },
  };
}

export default Blog;
