
async function renderUserHeader(parentID){
    
    const user = await getCurrentUser();
    let likedRecipes = likedRecipesArray();
    let count = likedRecipes.length;
   
    

    const userHeader = document.createElement('header');
    userHeader.classList.add('userHeader');
   
    //Logo that goes to landing page
    const linkLogo = document.createElement("a");
    linkLogo.id = 'linkLogo';
    linkLogo.href = '../../../../index.html';
    const logo = document.createElement("div");
    logo.classList.add("logo");
    linkLogo.appendChild(logo);
    userHeader.append(linkLogo);

    // Create userControl div
    const userControlDiv = document.createElement('div');
    userControlDiv.id = 'userControl';

    // Create image element
    const profileImg = document.createElement('img');
    profileImg.src = 'defaultPfp.jpg';
    profileImg.alt = 'default profile picture';
    userControlDiv.appendChild(profileImg);

    // Create buttons
    const removeUserButton = document.createElement('button');
    removeUserButton.textContent = 'Ta bort användare';
    removeUserButton.id = "removeUserButton";
    userControlDiv.appendChild(removeUserButton);

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logga ut';
    logoutButton.id = "logoutButton";
    userControlDiv.appendChild(logoutButton);

    // Create userInfo div
    const userInfoDiv = document.createElement('div');
    userInfoDiv.id = 'userInfo';

    // Create headings
    const heading2 = document.createElement('h2');
    heading2.textContent = 'My KITSCHen';
    userInfoDiv.appendChild(heading2);

    const heading3 = document.createElement('h3');
    heading3.textContent = `${user.username} || ${user.email}`;  //måste komma på hur och i vilket scope den här inforamtionen kommer ifrån
    userInfoDiv.appendChild(heading3);

    const heading4 = document.createElement('h4');
    heading4.textContent = `${count} stycken sparade recept`;
    userInfoDiv.appendChild(heading4);


    // lägger userControlDiv och userInfoDiv i userComponents
    const userComponents = document.createElement('div');
    userComponents.id = 'userComponents';
    userComponents.appendChild(userControlDiv);
    userComponents.appendChild(userInfoDiv);

    //lägger in i wrapper
    userHeader.appendChild(userComponents);
    document.getElementById(parentID).append(userHeader);

    //lägger till eventlisteners till knapparna
    removeUserButton.addEventListener('click', () => {
        
        let ok = confirm('Jag vill ta bort min användare');

        if (ok) {
            const deleteRequest = new Request('/api/users.php', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    token: STATE.token(),
                })
            });

            fetch(deleteRequest)
                .then(response => {
                    if (!response.ok) {

                        throw new Error('Något gick fel vid radering av användaren');
                    }

                    return response.json();
                })
                .then(data => {

                    localStorage.removeItem('token');
                    window.location.href = "/";  // Gör att man hamnar i login sidan
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    });

    logoutButton.addEventListener('click', () => {
        let ok = confirm('Jag vill logga ut');

        if (ok){
            localStorage.removeItem('token');
            //renderLogReg();
            location.href = "/"  // gör så att login sidan renderas när man loggar ut
            console.log('utloggad')
        }
    });
}

//LOGIK skapar en array med users som gillat
function likedRecipesArray() {

    const recipesArray = STATE.get('recipes'); // Hämtar alla recept
    const currentUser = STATE.get("user");
    const recipeLikedUsers = []; //Tom array som ska fyllas med användar id som gillat

    /* console.log(currentUser.id); */ //Objekt

    for (let i = 0; i < recipesArray.length; i++) { //Loopar igenom alla recept
        const recipeLike = recipesArray[i].like; //Loopar igenom alla liked arrays i recept (user_id)

        /* console.log(recipeLike); */

        // Om någon ingrediens hittas, lägg till receptet i resultatlistan
        if (recipeLike.includes(currentUser.id)) {

            recipeLikedUsers.push(recipesArray[i]);
        }        

/*         console.log(recipeLikedUsers);
 */    }

    return recipeLikedUsers; // Returnerar en lista av matchade recept
}

//renderar liked receipes
function renderLikedRecipes(parentID){
    const sectionTitle = document.createElement('h2');
    sectionTitle.id = 'sectionTitle';
    sectionTitle.textContent = 'Dina sparade recept';
    document.getElementById(parentID).append(sectionTitle);
    
    const likedRecipesSection = document.createElement('section');
    likedRecipesSection.id = 'likedRecipesSection';
    document.getElementById(parentID).append(likedRecipesSection);


    let arrayOfLikes = likedRecipesArray(); //LOGIK för gillade recept
    renderLikedInstance(arrayOfLikes);
}

function renderLikedInstance(instance_data){
    // const instance_data = STATE.get('recipes');
    for (let i = 0; i < instance_data.length; i++) {

        const likedRecipesContainer = document.createElement("div");
        likedRecipesContainer.classList.add("likedRecipesContainer"); // Lägger till en CSS-klass
        likedRecipesContainer.id = instance_data[i].name;
        document.getElementById('likedRecipesSection').appendChild(likedRecipesContainer);

        // Recept bild
        const recipe_img = document.createElement('img');
        recipe_img.classList.add("recipe_image");
        recipe_img.src = `../../${instance_data[i].image}`;
        likedRecipesContainer.appendChild(recipe_img); 

        recipe_img.addEventListener("click", () => renderUpdatePopup(instance_data, instance_data[i].image, instance_data[i].renderIngredients, instance_data[i].howTo, instance_data[i].name))

        // Recept titel
        const recipe_name = document.createElement('div');
        recipe_name.classList.add("recipe_name"); 
        recipe_name.innerText = instance_data[i].name;

        likedRecipesContainer.appendChild(recipe_name); 

        // Tid för receptet:
        const recipe_time = document.createElement('p');
        recipe_time.classList.add("recipe_time"); 
        recipe_time.innerText = instance_data[i].time;
        likedRecipesContainer.appendChild(recipe_time); 
    }
}

function renderUpdatePopup(recipe_instance, imageOfRecipe, renderIngredients, howToFromState, title){

    let popupWrapper = document.createElement("div");
    popupWrapper.id = "popupWrapper";
    dialogDOM.appendChild(popupWrapper);

    let exitImg = document.createElement('img');
    exitImg.id = "exitImg";
    exitImg.src = "../../media/img/exit.svg"
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
    headerImg.src = "../../media/img/popupHeader.jpg";
    popupWrapper.appendChild(headerImg);


    let divInPopUp = document.createElement("div");
    divInPopUp.id = "divInPopUp";
    popupWrapper.appendChild(divInPopUp);

    let popupImg = document.createElement("img");
    popupImg.id = "popupImg";
    popupImg.src = `../../${imageOfRecipe}`; 
    divInPopUp.appendChild(popupImg);

    let popupTitleContainer = document.createElement("div")
    popupTitleContainer.id = "popupTitleContainer";
    divInPopUp.appendChild(popupTitleContainer);

    let popUpTitle = document.createElement("h2");
    popUpTitle.id = "popUpTitle";
    popUpTitle.textContent = title;
    popupTitleContainer.appendChild(popUpTitle);

    // Recept tid
    let recipeTime = document.createElement("p");
    recipeTime.id = "recipeTime";
    recipeTime.textContent = recipe_instance.time;
    popupTitleContainer.appendChild(recipeTime);


    // rank stjärnor
    let rank_div_popup = document.createElement('div');
    rank_div_popup.classList.add("rank_div_popup");
    popupTitleContainer.appendChild(rank_div_popup);
    
    for (let i = 0; i < 5; i++) {
        const rank_img_popup = document.createElement('img');
        rank_img_popup.classList.add("rank_img_popup");
        rank_img_popup.src = '../../media/img/star.png'; // Ange sökvägen till bilden i img-mappen
        rank_div_popup.appendChild(rank_img_popup);
    }
    /* divInPopUp.appendChild(rank_div_popup); */

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
    ingredientList.textContent = renderIngredients;
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
    howTo.textContent = howToFromState;
    howToDiv.appendChild(howTo)


    dialogDOM.showModal();

    // Function to close the modal and clear its content
    function closeAndClearModal() {
        dialogDOM.close();
        dialogDOM.innerHTML = "";
    }
    
}