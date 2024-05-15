const _state = {
};

// const token = "4edf4d9e067b7cf8d70a86a1f6db21bfc2349d35";



const STATE = {
    get,
    Post,
/*     Patch,
    Delete, */
    
    token: () => {return sessionStorage.getItem("token");},

    renderApp,
    /* renderLogin */
}


function renderLogReg(){
    renderLogRegContainer('wrapper');  
}


// async function Patch(entity){}

// async function Delete(entity){}

async function renderApp() {


    
    //const response = await fetch ('./api/database/recepies.json');
    //const data = await response.json();
    
    //_state.recipes = data.artists;

   /*
    let recipeRequest = new Request(`./api/database/recepies.php`);
    const recipeData = await fetch_function (recipeRequest);
    _state.recipes = recipeData;
*/

    /*
        Hämtar alla recipes och ingredients och skapar 
        entity nycklar i state som kan hämtas av komponenterna
    */

    let recipeRequest = new Request(`./api/recipes.php`);
    const recipeData = await fetcher(recipeRequest);
    _state.recipes = recipeData.recipes;

    let ingredientsRequest = new Request(`./api/ingredients.php`);
    const ingredientsData = await fetcher(ingredientsRequest);
    _state.ingredients = ingredientsData.ingredients;

    let userRequest = new Request(`./api/users.php?token=${STATE.token()}`);
    const userData = await fetcher(userRequest);
    _state.user = userData;

    // Startsidan
    render_wrapper_DOM (); // startsidans wrapper anrop
    render_header(head); // header anrop
    render_sorted_recipes_DOM(matched_recipes); // anropar på container för alla sorterade/filtrerade recept
    render_ALL_recipes_DOM(recipes_all)
    update_sorted_recipes(ingredientsBox2);
    renderPopup();
    renderBox1("sort");
    renderFooter();

}




function get(entity) {

    // klonar
    return JSON.parse(JSON.stringify( _state[ entity ]));
/* renderChosenIngredientsBox("wrapper"); */ 
}

async function Post(){
    let entityArray = _state[entity];
    const data = await fetcher( rqst);
    entityArray.push(data);
}

async function Delete(rqst){

    const response = await fetcher(rqst);
    if(!response) return;

    //funktionaliteten för att ta bort användaren
}

async function Patch(rqst){

    const response = await fetcher(rqst);
    if(!response) return;

    //functionaliteten av att spara/avspara ett recept
}