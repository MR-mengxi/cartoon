export async function getBanners(){
    return fetch("/api/banner").then(resp=>resp.json()).then(resp=>resp.data);
}