import { Article } from "@/app/types/article";

export async function getLatestArticles() {
    const res = await fetch("http://localhost:8080/api/article/latest");
    if (res.ok) {
        const data = await res.json();
        return data as Article[]
    } else {
        throw new Error("Failed to fetch articles");
    }
}

export async function getArticles() {
    const res = await fetch("http://localhost:8080/api/article/all");
    if (res.ok) {
        const data = await res.json();
        return data as Article[]
    } else {
        throw new Error("Failed to fetch articles");
    }
}