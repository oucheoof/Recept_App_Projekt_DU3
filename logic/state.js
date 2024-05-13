const _state = {
};

const token = "4edf4d9e067b7cf8d70a86a1f6db21bfc2349d35";



const STATE = {
    get,
    Post,
/*     Patch,
    Delete, */
    
    // token: () => {return '4edf4d9e067b7cf8d70a86a1f6db21bfc2349d35';},

    renderApp,
    /* renderLogin */
}


function renderLogReg(){
    renderLogRegContainer('wrapper');  
}
// async function Get(entity){
//     let entityArray = _state[entity];
//     let entityClone = JSON.parse(JSON.stringify(entityArray));

//     return entityClone;
// }

// async function Post(entity, rqst){}

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