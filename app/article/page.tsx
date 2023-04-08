import { getArticles } from "../service/article"
import { Article } from "../types/article";

export default async function Article() {
  const articles = await getArticles()
  return (
    <div>
      <h1>ニュース記事</h1>
      <ul>
        {articles && articles.map((article: Article) => (
          <li key={article.id}>{article.title}
            <small>{article.createdAt}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}