function renderPopup() {
    const wrapper = document.querySelector("body");
    let dialogDOM = document.createElement("dialog");
    dialogDOM.id = "dialogDOM";
    wrapper.appendChild(dialogDOM);

    // Prevent scrolling when the modal is opened
    document.body.style.overflow = 'hidden';

    return dialogDOM;
}

function updatePopup(recipe_instance) {
    let popupWrapper = document.createElement("div");
    popupWrapper.id = "popupWrapper";
    dialogDOM.appendChild(popupWrapper);

    let exitImg = document.createElement('img');
    exitImg.id = "exitImg";
    exitImg.src = "./media/img/exit.svg";
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

    let headerImg = document.createElement("img");
    headerImg.id = "headerImg";
    headerImg.src = "./media/img/popupHeader.jpg";
    popupWrapper.appendChild(headerImg);

    let popupImg = document.createElement("img");
    popupImg.id = "popupImg";
    popupImg.src = recipe_instance.image;
    popupWrapper.appendChild(popupImg);

    let popUpTitle = document.createElement("h2");
    popUpTitle.id = "popUpTitle";
    popUpTitle.textContent = recipe_instance.name;
    popupWrapper.appendChild(popUpTitle);

    let ingredietListDOM = document.createElement("p");
    ingredietListDOM.id = "ingredietListDOM";
    ingredietListDOM.textContent = recipe_instance.renderIngredients;
    popupWrapper.appendChild(ingredietListDOM);

    let howToDOM = document.createElement("p");
    howToDOM.id = "howToDOM";
    howToDOM.textContent = recipe_instance.howTo;
    popupWrapper.appendChild(howToDOM);

    dialogDOM.showModal();
}

// Function to close the modal and clear its content
function closeAndClearModal() {
    dialogDOM.close();
    dialogDOM.innerHTML = "";
}
