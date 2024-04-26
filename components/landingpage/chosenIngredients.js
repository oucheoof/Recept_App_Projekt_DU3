
function renderChosenIngredientsBox(){
    // Box 2
    let chosenIngredientsBox = document.createElement("div");
    chosenIngredientsBox.id = "chosenIngredientsBox";
    boxesDiv.appendChild(chosenIngredientsBox);

    // Skapa h3 för Box 2
    let h3Chosen = document.createElement('h3');
    h3Chosen.textContent = 'Dina ingredienser';
    chosenIngredientsBox.appendChild(h3Chosen);

    let divForChosenButtons = document.createElement("div");
    divForChosenButtons.id = "divForChosenButtons";
    chosenIngredientsBox.appendChild(divForChosenButtons);

    

}

let arrayChosenIngredients = [];

function addAndRemoveIngredient(ingredient){
    arrayChosenIngredients.push(ingredient);
    console.log(arrayChosenIngredients);

    const button = document.createElement('button'); 
    button.textContent = ingredient;
    button.id = ingredient
    divForChosenButtons.appendChild(button);
}

function removeIngredient(){
    arrayChosenIngredients.forEach(chosenIngredient => {
        const button = document.createElement('button'); 
        button.textContent = chosenIngredient;
        button.addEventListener("click", function() {
            console.log('Du klickade på: ' + chosenIngredient);

            // Ta bort ingrediensen från arrayen
            const index = ingredients.indexOf(chosenIngredient);
            if (index > -1) {
                ingredients.splice(index, 1);
                /* console.log(ingredients); */
            }

            // Flytta knappen till box 1
            searchIngredientsBox.appendChild(button);

            addAndRemoveIngredient(ingredient);
        });
        //Skapar knapparna
        divForButtons.appendChild(button);
    }); 
}