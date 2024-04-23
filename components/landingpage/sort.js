function renderIngredientBox(parentID){ //Parent är <main>
    let mainWrapper = document.getElementById(parentID);

    //box 1
    let searchIngredientsBox = document.createElement("div");
    searchIngredientsBox.id = "searchIngredientsBox";
    mainWrapper.appendChild(searchIngredientsBox);

    // Skapa h3 för Box 1
    let h3Search = document.createElement('h3');
    h3Search.textContent = 'Välj ingredienser';
    searchIngredientsBox.appendChild(h3Search);

    //input
    let userIngredientSearch = document.createElement("input");
    searchIngredientsBox.appendChild(userIngredientSearch);


    //box 2
    let chosenIngredientsBox = document.createElement("div");
    chosenIngredientsBox.id = "chosenIngredientsBox";
    mainWrapper.appendChild(chosenIngredientsBox);

    // Skapa h3 för Box 2
    let h3Chosen = document.createElement('h3');
    h3Chosen.textContent = 'Dina ingredienser';
    chosenIngredientsBox.appendChild(h3Chosen);

    //ingredienser
    const ingredients = ["tomat", "pasta", "mjölk", "grädde"]; // Detta måste bytas ut berorende på vad vi har i API

    ingredients.forEach(ingredient => { //För varje ingrediens vi har i vår array 
        const button = document.createElement('button'); //ska vi göra detta
        button.textContent = ingredient;
        button.addEventListener("click", function(){
            console.log('Du klickade på: ' + ingredient);
            
            // Ta bort ingrediensen från arrayen
            const index = ingredients.indexOf(ingredient);
            if (index > -1) {
                ingredients.splice(index, 1);
                console.log(ingredients);
            }

            // Flytta knappen till den valda ingrediensboxen
            chosenIngredientsBox.appendChild(button);
        })
        searchIngredientsBox.appendChild(button);
    });    
}