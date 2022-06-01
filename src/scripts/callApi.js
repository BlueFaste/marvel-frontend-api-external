const api =async (url, params) => {
    const md5 = require('md5');
    const ts =Date.now()
    const hash =md5(ts + "d0b0fd32433e6bd40e34950b04e8d094ff0828fe" + "26ce35e5ba6976ab816272f9ba07e05b")

    const request = await fetch(`https://gateway.marvel.com/v1/public/${url}?${params}ts=${ts}&apikey=26ce35e5ba6976ab816272f9ba07e05b&hash=${hash}`)
    const res = await request.json()
    console.log(res.data);
    
    return res.data.results
}

export default api;