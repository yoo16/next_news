import { NextPage } from "next";
import { getArticle } from "../../service/article"
import { Article } from "../../types/article";

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Article(pageProps: PageProps) {
  console.log(pageProps)
  const id = pageProps.params.id;
  const article = await getArticle(id)
  return (
    <div>
      <h2>{article.title}</h2>
      <div>
        {article.body}
      </div>
    </div>
  )
}