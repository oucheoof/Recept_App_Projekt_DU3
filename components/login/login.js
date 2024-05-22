function renderLogRegContainer(parentID) {
    const DOM = document.createElement('div');
    DOM.id = 'logRegContainer';

    DOM.innerHTML = `
  
    <p class="title_login">Kitsch</p>

    <div id='buttons'>
        <button class="login_btn" type="button" onclick="renderLoginForm()"> Logga in </button>

        <button class ="skapakonto_btn" type="button" onclick="renderRegisterForm()"> Skapa konto </button>
        
    </div>
    <p class="terms">Terms & Conditions</p>
    `;

    document.getElementById(parentID).append(DOM);
}




async function renderLoginForm(){

    console.log('renderlogin');

    DOM = document.getElementById('logRegContainer');
    
    DOM.innerHTML = null;
    DOM.innerHTML = `
    
    <p id="loginTitle"> Kitsch </p>

    <form id="loginForm">

    <input class="name" type="text" id="username" name="username" placeholder="  Användarnamn">

    <input class="passw" type="password" id="password" name="password" placeholder="  Lösenord">
    
    <button id="login_btn_two" class="login"> Logga in</button>
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

    <form id="RegisterForm">

        <input class="email_mail" type="text" id="email" name="email" placeholder="  Email">

        <input class="newUser" type="text" id="username" name="username" placeholder="  Användarnamn">

        <input class="newpass" type="password" id="password" name="password" placeholder="  Lösenord">

        <input class="repeatpass" type="password" id="rptpassword" name="rptpassword" placeholder="  Upprepa lösenord">
        
        <button class="register"> Registrera konto </button>
     </form>`

    DOM.querySelector( '.register').onclick = async( e ) => {
        e.preventDefault();

        const username = DOM.querySelector( '#username').value;
        const email = DOM.querySelector( '#email').value;
        const password = DOM.querySelector( '#password').value;
        const rptpassword = DOM.querySelector( '#rptpassword').value;

        console.log (username, email, password, rptpassword);

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
            window.alert( `successful registration ${data.username}`)
        }

        renderLoginForm();
        console.log( data);

        } 
}