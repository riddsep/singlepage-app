import { useEffect, useState } from "react";
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const articlesList = articles.map((article) => (
    <li key={article.id}>{article.quote}</li>
  ));

  useEffect(() => {
    async function getArticles() {
      const request = await fetch("https://dummyjson.com/quotes");
      const response = await request.json();
      setArticles(response.quotes);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <ul>{loading ? <p>sedang memuat ...</p> : articlesList}</ul>
    </section>
  );
};
export default Blog;
