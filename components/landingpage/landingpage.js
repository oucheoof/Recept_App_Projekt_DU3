// wrapper funktion

function render_wrapper_DOM () {

    const wrapper = document.querySelector("body");
    
    wrapper.innerHTML = `
        <header>
            <nav> </nav>
        </header>

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
        header: document.querySelector("header"),
        sort: document.querySelector("#sort"),
        matchedRecepies: document.querySelector("#matched_recepies"),
        allRecepies: document.querySelector("#all_recepies"),
        
        aboutUs: document.querySelector("#aboutUs"),
        info: document.querySelector("#info"),
    }

}



// Header funktion

function render_header () {



}


// nav funktion?