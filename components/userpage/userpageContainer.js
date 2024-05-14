function renderUserpageContainer(parentID){

    const DOM = document.getElementById('wrapper');
    renderUserHeader(DOM);
    renderSavedRecipesContainer(DOM);
    // Hämta alla recept som innehåller ens user id baserat på (användarnamn, token)
    
    renderFooter();

}

