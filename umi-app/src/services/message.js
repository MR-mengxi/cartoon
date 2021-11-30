export async function getMessage(page = 1, limit = 10, modId) {
    return await fetch(`/api/message?page=${page}&limit=${limit}&modId=${modId}`).then(resp => resp.json()).then(resp => resp.data);
}

export async function addMessage(message) {
    return await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        },
    }).then(resp => resp.json());
}