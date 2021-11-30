export async function getShop(page = 1, limit = 10) {
    return await fetch(`/api/shop?page=${page}&limit=${limit}`).then(resp => resp.json()).then(resp => resp.data);
}