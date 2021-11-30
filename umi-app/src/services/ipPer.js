export async function getPer(page = 1, limit = 6) {
    return await fetch(`/api/ip/per?page=${page}&limit=${limit}`).then(resp => resp.json()).then(resp => resp.data);
}