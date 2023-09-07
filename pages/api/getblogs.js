import * as fs from 'fs';

export default (req, res) => {
  // Read the blogs.json file
  fs.readFile('blogdata/blogs.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error reading blogs data.' });
      return;
    }

    try {
      const blogs = JSON.parse(data);

      // Extract titles and content
      const blogData = blogs.map(({ title, content }) => ({
        title,
        content,
      }));

      res.status(200).json(blogData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error parsing blogs data.' });
    }
  });
};