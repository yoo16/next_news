import { getArticle } from "../../service/article"
import { Article } from "../../types/article";

interface PageProps {
  params: { id: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Article(pageProps: PageProps) {
  const article = await getArticle(pageProps.params.id)
  return (
    <div>
      {(() => {
        if (article) {
          return (
            <div>
              <h2 className="text-3xl font-bold p-3">{article.title}</h2>
              <div>
                {article.body}
              </div>
            </div>
          )
        } else {
          return <div>記事が見つかりません</div>
        }
      })()}
    </div>
  )
}