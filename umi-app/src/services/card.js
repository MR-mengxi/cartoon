export async function getCards(){
   return await fetch("/api/card").then(resp=>resp.json()).then(resp=>resp.data);
}