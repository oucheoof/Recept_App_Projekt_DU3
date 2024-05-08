async function fetcher(rqst){

    try{
        const response = await fetch(rqst);

        if(!response.ok){
            console.log("!response.ok")
            return
        }

        const data = await response.json(); 
        return data;

    }catch(error){

        console.log("womp womp");
        console.log(error);
    }
}