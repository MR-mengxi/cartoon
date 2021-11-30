export async function getIpCartoon(page=1,limit = 6){
    return await fetch(`/api/ip/cartoon?page=${page}&limit=${limit}`).then(resp=>resp.json()).then(resp=>resp.data);
}