const _state = {
};

// const token = "4edf4d9e067b7cf8d70a86a1f6db21bfc2349d35";



const STATE = {
    get,
    Post,
    Patch,
    Delete,
    
    token: () => localStorage.getItem( 'token'),

    renderApp,
    /* renderLogin */
}


function renderLogReg(){
    renderLogRegContainer('wrapper');  
}


async function StartuserState() {

    let recipeRequest = new Request(`../../api/recipes.php`);
    const recipeData = await fetcher(recipeRequest);
    _state.recipes = recipeData.recipes;

    let ingredientsRequest = new Request(`../../api/ingredients.php`);
    const ingredientsData = await fetcher(ingredientsRequest);
    _state.ingredients = ingredientsData.ingredients;

    let userRequest = new Request(`../../api/users.php?token=${STATE.token()}`);
    const userData = await fetcher(userRequest);
    _state.user = userData;

}
async function startState() {


    let recipeRequest = new Request(`./api/recipes.php`);
    const recipeData = await fetcher(recipeRequest);
    _state.recipes = recipeData.recipes;

    let ingredientsRequest = new Request(`./api/ingredients.php`);
    const ingredientsData = await fetcher(ingredientsRequest);
    _state.ingredients = ingredientsData.ingredients;

    let userRequest = new Request(`./api/users.php?token=${STATE.token()}`);
    const userData = await fetcher(userRequest);
    _state.user = userData;

}
async function renderApp() {

    await startState();

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

async function renderUserPage() {
    await StartuserState();

    renderPopup();
    renderUserpageContainer();
}




function get(entity) {

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

async function Patch(rqst, currentUserId, recipe){
    const data = await fetcher(rqst);
    let arrayOfUsersId = recipe.like;

    if (arrayOfUsersId.includes(currentUserId)) {
        // Remove user from the liked array
        const index = arrayOfUsersId.indexOf(currentUserId);
        if (index !== -1) {
            arrayOfUsersId.splice(index, 1);
            console.log(arrayOfUsersId);
        }
    } else {
        // Add user to the liked array
        arrayOfUsersId.push(currentUserId);
        console.log(arrayOfUsersId);
    }
}