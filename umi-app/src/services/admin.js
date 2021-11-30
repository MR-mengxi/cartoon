export async function login(loginId, loginPwd) {
    return await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ loginId, loginPwd }),
        headers: {
            'content-type': 'application/json'
        },
    }).then(resp => resp.json());

}

export async function whoami() {
    return await fetch("/api/admin/whoami").then(resp => resp.json()).then(resp => resp.data);
}