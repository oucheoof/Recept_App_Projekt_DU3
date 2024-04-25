function renderLogRegContainer(parentID) {
    const DOM = document.createElement('div');
    DOM.id = 'logRegContainer';

    DOM.innerHTML = `
    <h1>KITSCH</h1>
    <div id='buttons'>
        <button type="button" onclick="renderLoginForm()">Logga in</button>
        <button type="button" onclick="renderRegisterForm()">Skapa konto</button>
    </div>
    <p>Terms & Conditions</p>
    `;

    document.getElementById(parentID).append(DOM);
}

function renderLoginForm(){
    console.log('renderlogin');
    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `
    <h2>KITSCH</h2>
    <form id="loginForm">
    <label for="username">Användarnamn:</label>
    <input type="text" id="username" name="username">
    
    <label for="password">Lösenord:</label>
    <input type="password" id="password" name="password">
    
    <button type="submit">Logga in</button>
    </form>`
}


function renderRegisterForm(){
    console.log('renderRegister');
    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `
    <h2>KITSCH</h2>
    <form id="RegisterForm">
        <label for="username">Email:</label>
        <input type="text" id="email" name="email">

        <label for="username">Användarnamn:</label>
        <input type="text" id="username" name="username">

        <label for="password">Lösenord:</label>
        <input type="password" id="password" name="password">
        
        <label for="password">Upprepa lösenord:</label>
        <input type="password" id="rptpassword" name="rptpassword">
        
        <button type="submit">Registrera konto</button>
     </form>`
}