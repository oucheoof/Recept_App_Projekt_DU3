function renderpopUp(){
    //dom och append
    const wrapper = document.querySelector("body");
    let dialogDOM = document.createElement("dialog");
    dialogDOM.id = "dialogDOM";
    wrapper.appendChild(dialogDOM);

    let popUpWrapper = document.createElement("div");
    popUpWrapper.id = "popUpWrapper";
    dialogDOM.appendChild(popUpWrapper);

    let title = _state.recipes.ingredients;
    console.log(title);

    return dialogDOM;
}

function updatepopUp(recipe_instance){
    //Fyller och öppnas
    //MDN dialoge element
    //.showModal() method and closed using the .close() method.

    dialogDOM.showModal();
    
}
