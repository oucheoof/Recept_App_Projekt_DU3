function renderUserpageContainer(){

    const DOM = document.getElementById('wrapper');
    renderUserHeader(DOM.id);
    renderSavedRecipesContainer(DOM.id);
    // Hämta alla recept som innehåller ens user id baserat på (användarnamn, token)
    
    renderFooter();

}

