async function renderUserpageContainer(){

    const DOM = document.getElementById('wrapper');
    await renderUserHeader(DOM.id);
    renderLikedRecipes(DOM.id);
    // Hämta alla recept som innehåller ens user id baserat på (användarnamn, token)

    
    // renderFooter();

}
