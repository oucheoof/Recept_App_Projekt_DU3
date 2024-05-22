
function renderUserHeader(parentID){
    const user = {
        username: 'usernametest',
        email: 'emailtest',
        counter: 7
    }

    const userHeader = document.createElement('header');
    userHeader.classList.add('userHeader');

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
    userControlDiv.appendChild(removeUserButton);

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logga ut';
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
    heading4.textContent = `${user.counter} saved recipes`;
    userInfoDiv.appendChild(heading4);


    // lägger userControlDiv och userInfoDiv i userHeader
    userHeader.appendChild(userControlDiv);
    userHeader.appendChild(userInfoDiv);

    //lägger in i wrapper
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
    const likedRecipesSection = document.createElement('section');

    document.getElementById(parentID).append(likedRecipesSection);
    
    likedRecipesSection.id = 'likedRecipesSection';

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

        recipe_img.addEventListener("click", () => updatePopup(instance_data))

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