import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`
      );
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  return (
    <section>
      <h1>Blog Detail</h1>

      {loading && <p>Loading articles...</p>}
      <h1>{articles.title}</h1>
      <img src={articles.image_url} style={{ width: "50%" }} />
      <p>
        <a href={articles.url} target="_blank">
          click here for more information
        </a>
      </p>
      <p>{articles.summary}</p>
    </section>
  );
};
export default BlogDetail;
