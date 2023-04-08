import Link from "next/link";
import { getArticles } from "../service/article"
import { Article } from "../types/article";

export default async function Article() {
  const articles = await getArticles()
  return (
    <div>
      <h2 className="text-3xl font-bold p-3">ニュース記事</h2>
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