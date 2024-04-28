function renderIngredientBox(parentID) { // Parent är <main>
    let mainWrapper = document.getElementById(parentID);

    // Box 1
    let searchIngredientsBox = document.createElement("div");
    searchIngredientsBox.id = "searchIngredientsBox";
    mainWrapper.appendChild(searchIngredientsBox);

    // Skapa h3 för Box 1
    let h3Search = document.createElement('h3');
    h3Search.textContent = 'Välj ingredienser';
    searchIngredientsBox.appendChild(h3Search);

    // Input
    let userIngredientSearch = document.createElement("input");
    userIngredientSearch.id = "ingredientSearchInput";
    userIngredientSearch.setAttribute("placeholder", "Sök ingredienser...");
    userIngredientSearch.addEventListener("keyup", filterIngredients);  // Lägger till en event listener för keyup
    searchIngredientsBox.appendChild(userIngredientSearch);

    // Box 2
    let chosenIngredientsBox = document.createElement("div");
    chosenIngredientsBox.id = "chosenIngredientsBox";
    mainWrapper.appendChild(chosenIngredientsBox);

    // Skapa h3 för Box 2
    let h3Chosen = document.createElement('h3');
    h3Chosen.textContent = 'Dina ingredienser';
    chosenIngredientsBox.appendChild(h3Chosen);

    // Ingredienser
    const ingredients = ["tomat", "pasta", "mjölk", "grädde", "spenat"]; // Detta måste bytas ut beroende på vad vi har i API

    ingredients.forEach(ingredient => { // För varje ingrediens vi har i vår array
        const button = document.createElement('button'); // ska vi göra detta
        button.textContent = ingredient;
        button.addEventListener("click", function() {
            console.log('Du klickade på: ' + ingredient);

            // Ta bort ingrediensen från arrayen
            const index = ingredients.indexOf(ingredient);
            if (index > -1) {
                ingredients.splice(index, 1);
                console.log(ingredients);
            }

            // Flytta knappen till den valda ingrediensboxen
            chosenIngredientsBox.appendChild(button);
        });
        searchIngredientsBox.appendChild(button);
    });  // Avslutar forEach

    // Funktion för att uppdatera ingrediensknapparna baserat på filtrering
    function updateIngredientButtons(filteredIngredients) {
        searchIngredientsBox.querySelectorAll('button').forEach(button => button.remove()); // Tömmer nuvarande knappar

        filteredIngredients.forEach(ingredient => {
            const button = document.createElement('button');
            button.textContent = ingredient;
            button.addEventListener("click", function() {
                const index = ingredients.indexOf(ingredient);
                if (index > -1) {
                    ingredients.splice(index, 1); // Uppdaterar ingrediensarrayen
                }
                chosenIngredientsBox.appendChild(button); // Flyttar knappen
            });
            searchIngredientsBox.appendChild(button);
        });
    }  // Avslutar updateIngredientButtons

    // Filtreringsfunktion baserad på användarens input
    function filterIngredients() {
        let filterValue = userIngredientSearch.value.toUpperCase();
        let filteredIngredients = ingredients.filter(ingredient => 
            ingredient.toUpperCase().indexOf(filterValue) > -1);
        updateIngredientButtons(filteredIngredients);
    }  // Avslutar filterIngredients
}  
