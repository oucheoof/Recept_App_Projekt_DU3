const _state = {}

const STATE = {
    Get,
    Post,
    Patch,
    Delete,
    
    // token: () => {return 'ec24b88c7f3f7a3d488f29d59f70baba7f86414e';},

    renderApp,
    renderLogin
}

// async function Get(entity){
//     let entityArray = _state[entity];
//     let entityClone = JSON.parse(JSON.stringify(entityArray));

//     return entityClone;
// }

// async function Post(entity, rqst){}

// async function Patch(entity){}

// async function Delete(entity){}

function renderApp() {

    // Startsidan
    render_wrapper_DOM (); // startsidans wrapper anrop
    render_header(head); // header anrop

    renderIngredientBox("wrapper");
/* renderChosenIngredientsBox("wrapper"); */ 
}

function renderLogReg(){
    
    renderLogRegContainer('wrapper');
}