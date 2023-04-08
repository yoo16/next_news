import { Article } from "@/app/types/article";

export async function getLatestArticles() {
    const uri = "http://localhost:8080/api/article/latest";
    const res = await fetch(uri, { next: { revalidate: 10 } });
    // const res = await fetch(uri);
    if (res.ok) {
        const data = await res.json();
        return data as Article[]
    } else {
        throw new Error("Failed to fetch articles");
    }
}

export async function getArticles() {
    const uri = "http://localhost:8080/api/article/all";
    const res = await fetch(uri, { next: { revalidate: 10 } });
    // const res = await fetch(uri);
    if (res.ok) {
        const data = await res.json();
        return data as Article[]
    } else {
        throw new Error("Failed to fetch articles");
    }
}

export async function getArticle(id: string) {
    const uri = "http://localhost:8080/api/article/get/" + id;
    const res = await fetch(uri, { next: { revalidate: 10 } });
    if (res.ok) {
        const data = await res.json();
        return data as Article
    } else {
        throw new Error("Failed to fetch articles");
    }
}