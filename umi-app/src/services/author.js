export async function getAuthor(){
    return await fetch("/api/cartoon/author").then(resp=>resp.json()).then(resp=>resp.data);
}