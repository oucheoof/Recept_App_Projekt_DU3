
function renderUserHeader(parentID){
    const userHeader = document.createElement('header');

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
    heading3.textContent = `${username} || ${email}`;
    userInfoDiv.appendChild(heading3);

    const heading4 = document.createElement('h4');
    heading4.textContent = `${counter} saved recipes`;
    userInfoDiv.appendChild(heading4);

    // Append userControlDiv and userInfoDiv to userHeader
    userHeader.appendChild(userControlDiv);
    userHeader.appendChild(userInfoDiv);

    

    //lägger in i wrapper
    document.querySelector(parentID).append(userHeader);
}

async function renderSavedRecipesContainer(parentID){
    const savedRecipesContainer = document.createElement('section');
    savedRecipesContainer.id = 'savedRecipesContainter';

    //foreach render instance, all liked
    
}

