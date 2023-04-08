import { News } from './types';

async function getNewsList() {
  const res = await fetch("http://localhost:8080/api/news/all");
  if (res.ok) {
    const data = await res.json();
    return data as News[]
  } else {
    throw new Error("Failed to fetch articles");
  }
}

export default async function Home() {
  const newsList = await getNewsList();
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {newsList.map((news: News) => (
          <li key={news.id}>{news.title}</li>
        ))}
      </ul>
    </div>
  )
}
