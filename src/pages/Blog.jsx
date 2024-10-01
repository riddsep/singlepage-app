import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const response = await request.json();
      setArticles(response.results);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {loading ? (
          <p>sedang memuat ...</p>
        ) : (
          articles.map((article) => (
            <article key={article.id}>
              <h2>{<Link to={`/blog/${article.id}`}>{article.title}</Link>}</h2>
              <p>{new Date(article.published_at).toLocaleDateString()}</p>
            </article>
          ))
        )}
      </ul>
    </section>
  );
};
export default Blog;
