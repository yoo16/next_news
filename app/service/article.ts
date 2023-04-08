import { Article } from "@/app/types/article";

export async function getLatestArticles() {
    const uri = "http://localhost:8080/api/article/latest";
    try {
        const data = await fetch(uri, { next: { revalidate: 10 } }).then((res) => {
            if (!res.ok) throw new Error(`${res.status}`);
            return res.json();
        });
        return data as Article[]
    } catch (err: any) {
        return; 
    }
}

export async function getArticles() {
    const uri = "http://localhost:8080/api/article/all";
    try {
        const data = await fetch(uri, { next: { revalidate: 10 } }).then((res) => {
            if (!res.ok) throw new Error(`${res.status}`);
            return res.json();
        });
        return data as Article[]
    } catch (err: any) {
        return; 
    }
}

export async function getArticle(id: number) {
    const uri = "http://localhost:8080/api/article/get/" + id;
    try {
        const data = await fetch(uri).then((res) => {
            if (!res.ok) throw new Error(`${res.status}`);
            return res.json();
        });
        return data as Article;
    } catch (err: any) {
        return; 
    }
}