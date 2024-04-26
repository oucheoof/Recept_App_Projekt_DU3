// Wrapper funktion

function render_wrapper_DOM () {

    const wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = `
        
        <header id="head"> </header>

        <main>
            <section id="sort"> </section>
            <section id="matched_recepies"> </section>
            <section id="all_recepies"> </section>
        </main>

        <footer>
            <div id="aboutUs"></div>
            <div id="info"></div>
        </footer>
    `;

    // nycklar som kan läggas till i index.js
    return {
        header: document.querySelector("#head"),
        sort: document.querySelector("#sort"),
        matchedRecepies: document.querySelector("#matched_recepies"),
        allRecepies: document.querySelector("#all_recepies"),
        
        aboutUs: document.querySelector("#aboutUs"),
        info: document.querySelector("#info"),
    }

}


// Header funktion

function render_header (header) {

    header.innerHTML = `
        
        <img src="./media/img/omslag1.png">
        <h1> Kitsch </h1>
        
        <div> TEXT SLOGAN  </div>
        
        <div class="img_bottom">

            <img src="./media/thumbnails/amerikanskapannkakor.jpg">
            <img src="./media/thumbnails/frallor.jpg">
            <img src="./media/thumbnails/ramen.png">
            <img src="./media/thumbnails/flaaderdryck.png">

        </div>
    `;

    render_navigation(header); // Anropar på navigation funktion
    
}


// Nav funktion
function render_navigation(parent){  
    // parent är header i startsidan

    const nav = document.createElement("nav");
    nav.classList.add = "nav_meny"; 

    // länk för logo
    const linkLogo = document.createElement("a");
    linkLogo.href = "../index.html";

    // logo appendar till <a>
    const logo = document.createElement("div");
    logo.classList.add("logo");
    linkLogo.appendChild(logo);

    // länk för USER-logo
    const linkUserLogo = document.createElement("a");
    linkUserLogo.href = "../index.html";  // ÄNDRA SENARE när användarsidan är klar
  
    // USERlogo appendar till <a>
    const userLogo = document.createElement("div");
    userLogo.classList.add("user_logo");
    linkUserLogo.appendChild(userLogo);

    // lägger till barn i nav
    nav.appendChild(linkLogo);
    nav.appendChild(linkUserLogo);

    // lägger till i parent
    parent.appendChild(nav);

}
