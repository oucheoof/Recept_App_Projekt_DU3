function renderBox2(){
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

let ingredientsBox2 = [];

//Flyttar vidare ingredienser till box 2
function addIngredientToBox2(ingredient, ingredientsBox1){

    ingredientsBox2.push(ingredient);

    const button = document.createElement('button'); 
    button.textContent = ingredient;
    button.id = ingredient
    divForChosenButtons.appendChild(button);

    button.addEventListener("click", function(){
        removeChosenIngredientBox2(ingredient);

        ingredientsBox1.push(ingredient); //Lägger tillbaka till Box 1 ingredientsBox1 array
        const button = document.createElement('button'); 
        button.textContent = ingredient;
        button.id = ingredient

        update_sorted_recipes(ingredientsBox2);



        button.addEventListener("click", () => handleButtonClickBox1(ingredient));

        

        divForButtons.appendChild(button);
    })
            button.addEventListener("mouseover", function(){
            button.textContent = `${ingredient}         ❌` //Fixa sen https://boxicons.com/?query=x
        })
        button.addEventListener("mouseout", function(){
            button.textContent = `${ingredient}`
        })
}

function removeChosenIngredientBox2(ingredient) {
    let index = ingredientsBox2.indexOf(ingredient); // Get index
    if (index !== -1) {
        ingredientsBox2.splice(index, 1);  // Use index for splice
    }
    let elementToRemove = divForChosenButtons.querySelector('#' + ingredient);
    if (elementToRemove) {
        elementToRemove.remove(); // Check if element exists before removing
    }
}