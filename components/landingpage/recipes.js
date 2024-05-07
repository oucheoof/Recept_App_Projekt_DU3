function render_sorted_recipes_DOM(parent) { // matched_recepies är parent

    const matched_recipes_title = document.createElement("h2");
    matched_recipes_title.innerText = "Recept som matchar";
    parent.appendChild(matched_recipes_title);

    // funktionen renderar containern till griden som alla recept ska vara i 
    const container = document.createElement("div");
    container.id = "sorted_recipes_DOM";
    parent.appendChild(container);

    container.innerHTML = `
    <div id="recipe_container"></div>
    `
    
    //update_sorted_recipes(recipes);


    const recipesArray = STATE.get('recipes');
    
    console.log(STATE.get('recipes'));

    for ( let i = 0; i < recipesArray.length; i++) {
        
        // anrop med parent och instance datan -> datan i recipes
        render_instance_recipe(recipesArray[i]);
    }    


}




let sortedRecipes = ["tomat", "pasta", "mjölk"];
sortRecipesArray( sortedRecipes );

// sorterar recept
// vilka recept som ska visas utifrån sortering 
function sortRecipesArray(chosenIngredients) {
    const recipesArray = STATE.get('recipes'); // Hämtar alla recept
    const matchedRecipes = [];

    for (let i = 0; i < recipesArray.length; i++) {
        const recipeIngredients = recipesArray[i].ingredients;

        // Kontrollerar om någon av de valda ingredienserna finns i receptet
        const anyIngredientFound = chosenIngredients.some(ingredient =>
            recipeIngredients.includes(ingredient)
        );

        // Om någon ingrediens hittas, lägg till receptet i resultatlistan
        if (anyIngredientFound) {
            matchedRecipes.push(recipesArray[i]);
        }

    }

    return matchedRecipes; // Returnerar en lista av matchade recept
}





// uppdaterar sortering efter valda ingredienser
// anropas i stephens kod
function update_sorted_recipes( ingredientsArray ) {

    const container = document.querySelector("#sorted_recipes_DOM");

    container.innerHTML = ``;


    const filteredRecipes = sortRecipesArray(ingredientsArray); 

    // loopar genom recept databas
    for (let recipe of filteredRecipes) { // loopar igenom den sorterade/ filtrerade arrayen och renderar varje recept
        render_instance_recipe(container, recipe); // anropar render_instance_recipe (finns här nedan med två argument)


        //?? anropaa här
        //sortRecipesArray();
    }
}




// Funktion för att rendera ut varje enskilda recept 

function render_instance_recipe (instance_data) {
    // (parent, recipe)  förändra sen??
   //const parent = document.querySelector(parent_id);

    // container för ensklid recept
    const container_recipe = document.createElement("div");
    container_recipe.classList.add("container_recipe"); // Lägger till en CSS-klass


    // Alla receptdetaljer i .recipe_container:

    // Recept bild

    const recipe_img = document.createElement('img');
    recipe_img.classList.add("recipe_image");
    recipe_img.src = instance_data.image;

    container_recipe.appendChild(recipe_img); 


    // Recept titel
    const recipe_name = document.createElement('div');
    recipe_name.classList.add("recipe_name"); 
    recipe_name.innerText = instance_data.name;
    
    container_recipe.appendChild(recipe_name); 


    
    // rank



    // LIKE knapp
    const like_btn = document.createElement('button'); 
    like_btn.id = 'like_btn';
    like_btn.innerText = instance_data.favorite ? 'Unlike' : 'Like';  

    // lägger till en eventlyssnare för att hantera LIKEknapp
    like_btn.addEventListener('click', function() {

        // Togglar favorite status
        instance_data.favorite = !instance_data.favorite;

        // Uppdaterar knappen med text baserat på nya favorit status 
        if (instance_data.favorite) {
            like_btn.innerText = 'Unlike';
        } else {
            like_btn.innerText = 'Like';
        }

        // Kollar om favoriten är markerad eller inte + lägger till/tar bort CSS-klass
        if (instance_data.favorite) {
                like_btn.classList.add('favorited');
        } else {
            like_btn.classList.remove('favorited');
        }

        /*
        ELLER:
        instance_data.favorite = !instance_data.favorite;
        like_btn.innerText = instance_data.favorite ? 'Unlike' : 'Like';
        like_btn.classList.toggle('favorited', instance_data.favorite);

        */

           
            //STATE.patch(..);

    });

    container_recipe.appendChild(like_btn);


    recipe_container.append(container_recipe);


}