// wrapper funktion

function render_wrapper_DOM () {

    const wrapper = document.querySelector("body");
    
    wrapper.innerHTML = `
        
        <header id="head">

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

// Header funktion

function render_header (header) {

    header.innerHTML = `

        <nav class="nav_meny"> 
            <div class="logo"></div>
            <div class="user_logo"></div>
        </nav>
        
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


}


// nav funktion?