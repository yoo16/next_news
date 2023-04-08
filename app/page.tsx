import { Article } from './types/article';
import { getLatestArticles } from "./service/article";

export default async function Home() {
  const articles = await getLatestArticles()
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles.map((article: Article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}