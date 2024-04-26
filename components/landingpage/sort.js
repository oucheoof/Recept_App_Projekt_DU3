<<<<<<< Updated upstream
=======
function renderIngredientBox(parentID) { // Parent är <section id = "sort">
    let mainWrapper = document.getElementById(parentID);

    // div for h2
    let sortTitleDiv = document.createElement("div");
    sortTitleDiv.id = "sortTitleDiv";
    mainWrapper.appendChild(sortTitleDiv);
    
    // h2 för hela sort wrapper
    let sortTitle = document.createElement("h2");
    sortTitle.id = "sortTitle";
    sortTitle.textContent = "Välj dina ingredienser";
    sortTitleDiv.appendChild(sortTitle);

    //div for box 1 and box 2
    let boxesDiv = document.createElement("div");
    boxesDiv.id = "boxesDiv";
    mainWrapper.appendChild(boxesDiv);

    // Box 1
    let searchIngredientsBox = document.createElement("div");
    searchIngredientsBox.id = "searchIngredientsBox";
    boxesDiv.appendChild(searchIngredientsBox);

    // Skapa h3 för Box 1
    let searchTitle = document.createElement('h3');
    searchTitle.textContent = 'Välj ingredienser';
    searchIngredientsBox.appendChild(searchTitle);

    // Input
    let userIngredientSearch = document.createElement("input");
    userIngredientSearch.id = "ingredientSearchInput";
    userIngredientSearch.setAttribute("placeholder", "Sök ingredienser...");
    userIngredientSearch.addEventListener("keyup", filterIngredients);  // Lägger till en event listener för keyup
    searchIngredientsBox.appendChild(userIngredientSearch);

    //div för buttons
    let divForButtons = document.createElement("div");
    divForButtons.id = "divForButtons";
    searchIngredientsBox.appendChild(divForButtons);

    renderChosenIngredientsBox();
    

    // Ingredienser
    let ingredients = ["tomat", "potatis", "lök", "vitlök", "morot", "paprika", "basilika", "oregano", "kyckling", "nötkött", "fläskkött", "ägg", "mjöl", "mjölk", "grädde", "ost", "smör", "olivolja", "ris", "pasta"];

    //Gör knappar för varje ingrediens
    ingredients.forEach(ingredient => {
        const button = document.createElement('button'); 
        button.textContent = ingredient;
        button.id = ingredient;
        button.addEventListener("click", function() {
            console.log('Du klickade på: ' + ingredient);

            // Ta bort ingrediensen från arrayen
            const index = ingredients.indexOf(ingredient);
            if (index > -1) {
                ingredients.splice(index, 1);
                /* console.log(ingredients); */
            }

            searchIngredientsBox.getElementById(ingredient).remove();
            addAndRemoveIngredient(ingredient);
        });
        //Skapar knapparna
        divForButtons.appendChild(button);
    }); 

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
            divForButtons.appendChild(button);
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
>>>>>>> Stashed changes
