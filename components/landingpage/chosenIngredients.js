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

//Flyttar vidare ingredienser till box 2
function addIngredientToChosen(ingredient){
    
    arrayChosenIngredients.push(ingredient);
    console.log(arrayChosenIngredients);

    const button = document.createElement('button'); 
    button.textContent = ingredient;
    button.id = ingredient
    divForChosenButtons.appendChild(button);

    button.addEventListener("click", function(){
        removeChosenIngredient(ingredient);
        
    })
}

function removeChosenIngredient(ingredient){
    arrayChosenIngredients.splice(ingredient);
    divForChosenButtons.querySelector('#' + ingredient).remove();
}