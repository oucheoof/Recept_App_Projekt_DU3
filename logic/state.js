const _state = {
    recipes: [
        {
            id: 1,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            howTo: "",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 2,
            name: "Pasta",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 3,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 4,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 5,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 6,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
    ]
};


const STATE = {
 
    get

};





function render_App() {


    
    //const response = await fetch ('./api/database/recepies.json');
    //const data = await response.json();
    
    //_state.recipes = data.artists;
    console.log(_state);

   /*
    let recipeRequest = new Request(`./api/database/recepies.php`);
    const recipeData = await fetch_function (recipeRequest);
    _state.recipes = recipeData;
*/

    // Startsidan
    render_wrapper_DOM (); // startsidans wrapper anrop
    render_header(head); // header anrop
    render_sorted_recipes_DOM("matched_recepies"); // anropar på container för alla sorterade/filtrerade recept 
    
    renderBox1("sort");
    renderFooter();
    
    //render_instance_recipe();


}




function get(entity) {

    // klonar
    return JSON.parse(JSON.stringify( _state[ entity ]));

}