export async function getMods(page = 1, limit = 8) {
    return await fetch(`/api/mod?page=${page}&limit=${limit}`).then(resp => resp.json()).then(resp => resp.data);
}

export async function getMod(id) {
    return await fetch(`/api/mod/${id}`).then(resp => resp.json()).then(resp => resp.data);
}