    let ingredientsBox1 = ["tomat", "potatis", "pasta"];

function renderBox1(parentID) { // Parent är <section id = "sort">
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

    renderBox2(); //render
    createIngredientBtnsBox1();
    // Funktion för att uppdatera ingrediensknapparna baserat på filtrering
    function updateIngredientButtons(filteredIngredients) {
        searchIngredientsBox.querySelectorAll('button').forEach(button => button.remove()); // Tömmer nuvarande knappar

        filteredIngredients.forEach(ingredient => {
            const button = document.createElement('button');
            button.textContent = ingredient;
            button.id = ingredient;
            button.addEventListener("click", function() {
                const index = ingredientsBox1.indexOf(ingredient);
                if (index > -1) {
                    ingredientsBox1.splice(index, 1); // Uppdaterar ingrediensarrayen
                    handleButtonClickBox1(ingredient);// ska skapa en knapp i box2
                }

            });
            divForButtons.appendChild(button);
        });
    }  // Avslutar updateIngredientButtons

    // Filtreringsfunktion baserad på användarens input
    function filterIngredients() {
        let filterValue = userIngredientSearch.value.toUpperCase();
        let filteredIngredients = ingredientsBox1.filter(ingredient => 
            ingredient.toUpperCase().indexOf(filterValue) > -1);
        updateIngredientButtons(filteredIngredients);
    }  // Avslutar filterIngredients
}  

function createIngredientBtnsBox1() {

    // Create and append buttons for each ingredient
    ingredientsBox1.forEach(ingredient => {
        const button = document.createElement('button');
        button.textContent = ingredient;
        button.id = ingredient;

        // Attach event listener to handle click
        button.addEventListener("click", () => handleButtonClickBox1(ingredient));

        // Append the button to the DOM
        divForButtons.appendChild(button);
    });
}

function handleButtonClickBox1(ingredient) {

    // Remove the button from the DOM
    const buttonToRemove = divForButtons.querySelector('#' + ingredient);
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
    // Remove the ingredient from the array
    const index = ingredientsBox1.indexOf(ingredient);
    if (index > -1) {
        ingredientsBox1.splice(index, 1);
    }

    addIngredientToBox2(ingredient);
    
    update_sorted_recipes(ingredientsBox2);


    // Add the ingredient to the chosen list
}