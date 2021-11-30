export async function getHeader() {
    return await fetch("/api/header").then(resp => resp.json()).then(resp => resp.datas);
}