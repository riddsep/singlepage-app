import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`
      );

      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  if (notFound) {
    return <h1>Halaman tidak di temukan :(</h1>;
  }

  return (
    <section>
      <h1>Blog Detail</h1>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <article>
          <h1>{articles.title}</h1>
          <p>{new Date(articles.published_at).toLocaleDateString()}</p>
          <img src={articles.image_url} style={{ width: "50%" }} />
          <p>
            <a href={articles.url} target="_blank">
              click here for more information
            </a>
          </p>
          <p>{articles.summary}</p>
        </article>
      )}
    </section>
  );
};
export default BlogDetail;
