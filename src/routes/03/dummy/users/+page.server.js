export async function load({ fetch, url }) {
       const pais = url.searchParams.get ('pais');
       const link = 'https://dummyjson.com/users';
       if (pais) link += '?key=country&value=${pais}'
       const res = await fetch(link)
       const data = await res.json();

       return {
        users: data.users
       };
}