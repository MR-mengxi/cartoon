export async function getList(page = 1,limt = 10){
    return await fetch(`/api/list?page=${page}&limit=${limt}`).then(resp=>resp.json()).then(resp=>resp.data.datas);
}