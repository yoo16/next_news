import { Article } from './types/article';
import { getLatestArticles } from "./service/article";
import Link from 'next/link';

export default async function Home() {
  const articles = await getLatestArticles()
  return (
    <div>
      <h2 className="text-3xl font-bold p-3">新着記事</h2>
      <ul>
        {articles && articles.map((article: Article) => (
          <li key={article.id}>
            <Link className="text-blue-500 p-3" href={{ pathname: "article/" + article.id }}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
