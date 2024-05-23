async function fetcher(rqst){ 
    
    try{
        const response = await fetch(rqst);

        if(!response.ok){
            console.log("!response.ok")
            console.log("Response not OK:", response.status, response.statusText);
            console.log(response)
            return response.status
        }

        const data = await response.json(); 
        return data;

    }catch(error){

        console.log("womp womp");
        console.log(error);
    }
}
