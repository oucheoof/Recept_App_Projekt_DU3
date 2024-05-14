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




async function renderLoginForm(){
    console.log('renderlogin');
    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `
    <h2>KITSCH</h2>
    <form id="loginForm">
    <input type="text" id="username" name="username" placeholder="Användarnamn">
    <input type="password" id="password" name="password" placeholder="Lösenord">
    
    <button class="login">Logga in</button>
    </form>`

    DOM.querySelector('.login').onclick = async(e) => {
        e.preventDefault();

        const username = DOM.querySelector('#username').value;
        const password = DOM.querySelector('#password').value;

        console.log(username, password);
        const registerRequest = new Request('../api/login.php',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username, 
                password: password 
            }),
        });

        const data = await fetcher( registerRequest);
            console.log(data);
            if (data.error) {
                window.alert(data.error);
            } else {
                sessionStorage.setItem('token', data.token);
                location.reload();
            }
    };


}



async function renderRegisterForm(){
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
        
        <button class="register">Registrera konto</button>
     </form>`

    parentDOM.querySelector( '.register').onclick = async( e ) => {
        e.preventDefault();

        const username = parentDOM.querySelector( '#username').value;
        const email = parentDOM.querySelector( '#email').value;
        const password = parentDOM.querySelector( '#password').value;
        const rptpassword = parentDOM.querySelector( '#rptpassword').value;

        console.log(username, email, password, rptpassword);

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

        if( !data.error ) {
            window.alert( `successful registration ${data.name}`)
        }

        console.log( data);

        } 
}