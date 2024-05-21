
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
            const deleteRequest = new Request('/api/users.php',{
                method: 'DELETE',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    token: STATE.token(),
                })
            })
            STATE.Delete(deleteRequest);

        }
    });

    logoutButton.addEventListener('click', () => {
       
        let ok = confirm('Jag vill logga ut');
       
       if (ok){
           sessionStorage.removeItem('token');
           //renderLogReg();
           location.href = "/"  // gör så att login sidan renderas när man loggar ut
           console.log('utloggad')
       }
    })
}

async function renderSavedRecipesContainer(parentID){
    const savedRecipesContainer = document.createElement('section');
    savedRecipesContainer.id = 'savedRecipesContainter';

    //foreach render instance, all liked
    
}

