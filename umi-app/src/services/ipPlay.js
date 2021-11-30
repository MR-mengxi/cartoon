export async function getPlay(page = 1, limit = 6) {
    return await fetch(`/api/ip/play?page=${page}&limit=${limit}`).then(resp => resp.json()).then(resp => resp.data);
}