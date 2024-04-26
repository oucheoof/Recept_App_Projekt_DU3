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
    <input type="text" id="username" name="username" placeholder="Användarnamn">
    <input type="password" id="password" name="password" placeholder="Lösenord">
    
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

        <input type="text" id="email" name="email" placeholder="Email">
        <input type="text" id="username" name="username" placeholder="Användarnamn">
        <input type="password" id="password" name="password" placeholder="Lösenord">
        <input type="password" id="rptpassword" name="rptpassword" placeholder="Upprepa lösenord">
        
        <button type="submit">Registrera konto</button>
     </form>`
}