function render_sorted_recipes_DOM(parent) { // matched_recepies är parent

    const matched_recipes_title = document.createElement("h2");
    matched_recipes_title.id = "matched_recipes_title";
    matched_recipes_title.innerText = "Recept som matchar";
    parent.appendChild(matched_recipes_title);

    // hämta längd på matchrecipes 
    const number_recipes_matched = document.createElement('p');
    number_recipes_matched.id = "number_recipes_matched";
    parent.appendChild(number_recipes_matched);


    // funktionen renderar containern till griden som alla recept ska vara i 
    const container = document.createElement("div");
    container.id = "sorted_recipes_DOM";
    parent.appendChild(container);

    // tog bort detta:
    //container.innerHTML = `
    //<div id="recipe_container"></div>
    //`

    const recipesArray = STATE.get('recipes');
    

    for ( let i = 0; i < recipesArray.length; i++) {
        
        // anrop med parent och instance datan -> datan i recipes
        render_instance_recipe(recipesArray[i]);
    }
     

}


// ha en kommentar där du skriver " 15 recept matchdes med dina ingredienser " eller ngt liknande 


// sorterar recept från array 
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


    // FÖRÄNDRADE ID HÄR
    const container = document.querySelector("#sorted_recipes_DOM");

    container.innerHTML = ``;

    const filteredRecipes = sortRecipesArray(ingredientsArray); 


    // Uppdaterar text med antalet matchade recept
    const numRecipesMatchedElement = document.getElementById("number_recipes_matched");
    numRecipesMatchedElement.innerText = `${filteredRecipes.length} recept matchade din sökning! Yummi!`;

    // loopar genom recept databas
    for (let recipe of filteredRecipes) { // loopar igenom den sorterade/ filtrerade arrayen och renderar varje recept
        render_instance_recipe(recipe); // anropar render_instance_recipe (finns här nedan med två argument)
    }
}



// Funktion för att uppdatera meddelandet om antal matchade recept
/*function updateMatchedRecipesMessage(numRecipes) {
    const messageContainer = document.querySelector("#matched_recipes_title");
    messageContainer.innerText = `Antal matchande recept: ${numRecipes}`;
}*/



// funktion för att rendera ut varje enskilda recept 

function render_instance_recipe (instance_data) {
    // (parent, recipe)  förändra sen??
   //const parent = document.querySelector(parent_id);

    // container för ensklid recept
    const container_recipe = document.createElement("div");
    container_recipe.classList.add("container_recipe"); // Lägger till en CSS-klass
    container_recipe.id = instance_data.name;
    


    // Alla receptdetaljer i .recipe_container:

    // Recept bild
    const recipe_img = document.createElement('img');
    recipe_img.classList.add("recipe_image");
    recipe_img.src = instance_data.image;
    container_recipe.appendChild(recipe_img); 

    recipe_img.addEventListener("click", () => updatePopup(instance_data))


    // Recept titel
    const recipe_name = document.createElement('div');
    recipe_name.classList.add("recipe_name"); 
    recipe_name.innerText = instance_data.name;

    
    container_recipe.appendChild(recipe_name); 


    // rank



    // LIKE knapp
    const like_btn = document.createElement('button'); 
    like_btn.classList.add ('like_btn');
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

    // för filtrerade recepten
    let recipe_container = document.getElementById("sorted_recipes_DOM");

    recipe_container.append(container_recipe);


    /*
    // för alla recepten:
    let all_recipes_container = document.getElementById("all_recipes_container");

    all_recipes_container.append(container_recipe);*/

}






// funktion för att rendera ut ALLA RECEPT -> recept container
// anropas i state
function render_ALL_recipes_DOM( parent ) { // matched_recepies är parent

    const all_recipes_title = document.createElement("h4");
    all_recipes_title.innerText = "Alla recept";
    parent.appendChild(all_recipes_title);

    // funktionen renderar containern till griden som alla recept ska vara i 
    const container = document.createElement("div");
    container.id = "all_recipes_DOM";
    parent.appendChild(container);


    const recipesAllArray = STATE.get('recipes');
    

    for ( let i = 0; i < recipesAllArray.length; i++) {
        
        // anrop med parent och instance datan -> datan i recipes
        //render_instance_recipe(recipesArray[i]);

        render_ALL_instance_recipe(recipesAllArray[i])
    }  
     
}


function render_ALL_instance_recipe(instance_data) {
    

    // container för ensklid recept
    const container_recipe = document.createElement("div");
    container_recipe.classList.add("container_recipe"); // Lägger till en CSS-klass
    container_recipe.id = instance_data.name;
    // Alla receptdetaljer i .recipe_container:

    // Recept bild
    const recipe_img = document.createElement('img');
    recipe_img.classList.add("recipe_image");
    recipe_img.src = instance_data.image;
    container_recipe.appendChild(recipe_img); 

    recipe_img.addEventListener("click", () => updatePopup(instance_data))

    // Recept titel
    const recipe_name = document.createElement('div');
    recipe_name.classList.add("recipe_name"); 
    recipe_name.innerText = instance_data.name;
    
    container_recipe.appendChild(recipe_name); 


    // rank



    // LIKE knapp
    const like_btn = document.createElement('button'); 
    like_btn.classList.add ('like_btn');
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

    // förändrade detta!
   // för alla recepten :
    let recipes_all_container = document.getElementById("all_recipes_DOM");

    recipes_all_container.append(container_recipe);

}




