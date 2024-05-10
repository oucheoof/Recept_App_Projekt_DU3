function renderPopup(){
    //dom och append
    const wrapper = document.querySelector("body");
    let dialogDOM = document.createElement("dialog");
    dialogDOM.id = "dialogDOM";
    wrapper.appendChild(dialogDOM);

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
    dialogDOM.appendChild(exitImg);

    //Tömmer modal vid esc
    document.addEventListener('keyup', function(event) {
        if (event.key === "Escape") {
            dialogDOM.innerHTML = "";
        }
    });
    //Tömmer modal vid click på exit button
    exitImg.addEventListener("click", () => {
        dialogDOM.close();
        dialogDOM.innerHTML = "";
    }) 

    let headerImg = document.createElement("img")
    headerImg.id = "headerImg";
    headerImg.src = "";
    dialogDOM.appendChild(headerImg);

    let popupImg = document.createElement("img");
    popupImg.id = "popupImg";
    popupImg.src = "";
    dialogDOM.appendChild(popupImg);

    let popUpTitle = document.createElement("h2");
    popUpTitle.id = "popUpTitle";
    popUpTitle.textContent = recipe_instance.name;
    dialogDOM.appendChild(popUpTitle);

    let ingredietListDOM = document.createElement("p")
    ingredietListDOM.id = "ingredietListDOM";
    ingredietListDOM.textContent = recipe_instance.renderIngredients;
    dialogDOM.appendChild(ingredietListDOM)

    let howToDOM = document.createElement("p")
    howToDOM.id = "howToDOM";
    howToDOM.textContent = recipe_instance.howTo;
    dialogDOM.appendChild(howToDOM)

    dialogDOM.showModal();
    
}