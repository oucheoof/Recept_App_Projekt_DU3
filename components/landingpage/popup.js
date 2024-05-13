

function renderPopup(){
    //dom och append
    const wrapper = document.querySelector("body");
    let dialogDOM = document.createElement("dialog");
    dialogDOM.id = "dialogDOM";
    wrapper.appendChild(dialogDOM);

    console.log(dialogDOM);

    return dialogDOM;

}


function updatePopup(recipe_instance){
    //Fyller och öppnas
    //MDN dialoge element
    //.showModal() method and closed using the .close() method.

    let popupWrapper = document.createElement("div");
    popupWrapper.id = "popupWrapper";
    dialogDOM.appendChild(popupWrapper);

    let exitImg = document.createElement('img');
    exitImg.id = "exitImg";
    exitImg.src = "./media/img/exit.svg"
    popupWrapper.appendChild(exitImg);

    // Close modal on Escape key
    document.addEventListener('keyup', function(event) {
        if (event.key === "Escape") {
            closeAndClearModal();
        }
    });

    // Close modal on exit button click
    exitImg.addEventListener("click", closeAndClearModal);

    // Close modal when clicking outside the modal content
    dialogDOM.addEventListener("click", function(event) {
        if (event.target === dialogDOM) {
            closeAndClearModal();
        }
    });


    let headerImg = document.createElement("img")
    headerImg.id = "headerImg";
    headerImg.src = "./media/img/popupHeader.jpg";
    popupWrapper.appendChild(headerImg);


    let divInPopUp = document.createElement("div");
    divInPopUp.id = "divInPopUp";
    popupWrapper.appendChild(divInPopUp);

    let popupImg = document.createElement("img");
    popupImg.id = "popupImg";
    popupImg.src = recipe_instance.image;
    divInPopUp.appendChild(popupImg);

    let popUpTitle = document.createElement("h2");
    popUpTitle.id = "popUpTitle";
    popUpTitle.textContent = recipe_instance.name;
    divInPopUp.appendChild(popUpTitle);

    // eventuellt en kortre beskrivning av recept?
    
    /*let popUpBeskrivning = document.createElement("p");
    popUpBeskrivning.id = "popUpTitle";
    popUpBeskrivning.textContent = recipe_instance.name; // fel på denna rad -> behöver lägga till nyckel i databas med beskrivning av recept
    divInPopUp.appendChild(popUpBeskrivning);
    */

    let divInPopUpTwo = document.createElement("div");
    divInPopUpTwo.id = "divInPopUpTwo";
    popupWrapper.appendChild(divInPopUpTwo);

    // Div för h3 + ingredienser
    let ingredientDiv = document.createElement("div");
    ingredientDiv.id = "ingredientDiv";
    divInPopUpTwo.appendChild(ingredientDiv);
    
    let ingredientListTitle = document.createElement("h3")
    ingredientListTitle.id = "ingredientListTitle";
    ingredientListTitle.textContent = "Ingredienser";
    ingredientDiv.appendChild(ingredientListTitle)

    let ingredientList = document.createElement("p")
    ingredientList.id = "ingredientList";
    ingredientList.textContent = recipe_instance.renderIngredients;
    ingredientDiv.appendChild(ingredientList)


    // Div för h3 + gör så här
    let howToDiv = document.createElement("div");
    howToDiv.id = "howToDiv";
    divInPopUpTwo.appendChild(howToDiv);

    let hoWToTitel = document.createElement("h3")
    hoWToTitel.id = "hoWToTitel";
    hoWToTitel.textContent = "Gör så här";
    howToDiv.appendChild(hoWToTitel)

    let howTo = document.createElement("p")
    howTo.id = "howTo";
    howTo.textContent = recipe_instance.howTo;
    howToDiv.appendChild(howTo)


    dialogDOM.showModal();

    // Function to close the modal and clear its content
    function closeAndClearModal() {
        dialogDOM.close();
        dialogDOM.innerHTML = "";
    }
    
}