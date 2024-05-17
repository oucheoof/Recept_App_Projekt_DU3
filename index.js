async function START(){

    if( !sessionStorage.getItem('token')) {
    renderLogReg();
 } else {
    renderApp();
 }
}

START();