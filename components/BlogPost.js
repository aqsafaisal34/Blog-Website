// components/BlogPost.js
import React from 'react';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';

const BlogPost = ({ blog }) => {
  return (
    <>
    <div className={styles.image}>
    <img className={styles.img} src="/home.img" alt="coding" width={157} height={158} />
    </div>
    <div className={styles.eachblogList}>
       <p className={styles.eachblogId}>Id:{blog && blog.id}</p>
       <h1 className={styles.eachblogTitle}>Title:{blog && blog.title}</h1>
      <p className={styles.eachblogContent}>Content:{blog && blog.content}</p>
      <p className={styles.eachblogAuthor}>Author:{blog && blog.author}</p>
      <p className={styles.eachblogDate}>Date:{blog && blog.date}</p>
      <Link href='/blog' className={styles.link}>Read More Blogs</Link>
    </div>
   
     
    </>
  );
};

export default BlogPost;
