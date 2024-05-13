async function fetcher(rqst){ 
    let response = await fetch(rqst); 

    let data = await response.json() 

    return data; 
}
