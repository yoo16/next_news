import { Article } from './types/article';
import { getLatestArticles } from "./service/article";
import Link from 'next/link';

export default async function Home() {
  const articles = await getLatestArticles()
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles && articles.map((article: Article) => (
          <li key={article.id}>
            <Link href={{ pathname: "article/" + article.id }}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
