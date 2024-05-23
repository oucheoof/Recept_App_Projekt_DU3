
function renderLogRegContainer(parentID) {
    const DOM = document.createElement('div');
    DOM.id = 'logRegContainer';

    DOM.innerHTML = `
  
    <p class="title_login">Kitsch</p>

    <div id='buttons'>
        <button class="login_btn" type="button" onclick="renderLoginForm()"> Logga in </button>

        <button class ="skapakonto_btn" type="button" onclick="renderRegisterForm()"> Skapa konto </button>
        
    </div>
    <button id="terms" type="button" onclick="terms()">Integritet och användarvillkor</button>

    `;

    document.getElementById(parentID).append(DOM);
}

async function renderLoginForm(){

    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `
    
    <p id="loginTitle"> Kitsch </p>

    <div id="errorContainer"></div>

    <form id="loginForm">

    <input class="name" type="text" id="username" name="username" placeholder="  Användarnamn">

    <input class="passw" type="password" id="password" name="password" placeholder="  Lösenord">
    
    <button id="login_btn_two" class="login"> Logga in</button>

    <button class="goBack" onclick="goBack()">Ny användare?<br> Registrera ditt konto istället</button>

    
    </form>`

    DOM.querySelector('.login').onclick = async(e) => {
        e.preventDefault();

        const username = DOM.querySelector('#username').value;
        const password = DOM.querySelector('#password').value;

        const registerRequest = new Request('../api/login.php',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username, 
                password: password 
            }),
        });

        const data = await fetcher( registerRequest);
            if (!isNaN(data)) {
                renderLogRegError(data);
            } else {
                localStorage.setItem('token', data.token);
                location.reload();
            }
    };

}

async function renderRegisterForm(){

    console.log('renderRegister');
    
    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `

    <p class="loginTitle_reg">Kitsch</p>

    <div id="errorContainer"></div>

    <form id="RegisterForm">

        <input class="email_mail" type="text" id="email" name="email" placeholder="  Email">

        <input class="newUser" type="text" id="username" name="username" placeholder="  Användarnamn">

        <input class="newpass" type="password" id="password" name="password" placeholder="  Lösenord">

        <input class="repeatpass" type="password" id="rptpassword" name="rptpassword" placeholder="  Upprepa lösenord">
        
        <button class="register"> Registrera konto </button>

         <button class="goBack" onclick="goBack()">Redan registrerad? Logga in </button>

     </form>`

    DOM.querySelector( '.register').onclick = async( e ) => {
        e.preventDefault();
        

        const username = DOM.querySelector( '#username').value;
        const email = DOM.querySelector( '#email').value;
        const password = DOM.querySelector( '#password').value;
        const rptpassword = DOM.querySelector( '#rptpassword').value;

        const registerRequest = new Request( './api/users.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                rptpassword: rptpassword
            }),
        });

            const data = await fetcher( registerRequest);
        
            if(!isNaN(data)) {
                console.log(data);
                renderLogRegError(data);
            }else{
                window.alert( `Successful registration ${data.username}`);
                renderLoginForm();
            }
        } 
}

function terms(){
    window.alert('Man måste vara snäll med bedömningen av detta projekt.\n\n mvh, \n Michelle Klemendz, Stephen Doan och Amanda Cai');
}

function goBack(){
    DOM = document.getElementById('wrapper');
    DOM.innerHTML = null;

    renderLogRegContainer('wrapper');
}

function renderLogRegError(statusCode){
    DOM = document.getElementById('errorContainer');
    let errorMessage;

    switch (statusCode){
        case 400:
            errorMessage = 'Alla fälten måste fyllas i';
            break; 
        case 404:
            errorMessage = 'Fel användarnam';
            break;
        case 470:
            errorMessage = 'Fel lösenord'
            break;
        case 471:
            errorMessage = 'Lösenorden matchar inte'
            break;
        case 472:
            errorMessage = 'Inte en emejl adress, måste innehålla "@"'
            break;
        case 473:
            errorMessage = 'Användarnamnet är upptaget'
            break;
        default:
            errorMessage = 'Någonting gick fel, testa igen senare'      
    }

    DOM.innerHTML = `<p id="shownErrorMessage">${errorMessage}</p>`
}