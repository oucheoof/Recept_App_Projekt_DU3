//const wrapper_containers = render_wrapper_DOM ()

/*
    renderApp || render logReg baserat på om localstorage är set
*/

if( !sessionStorage.getItem('token')) {
    renderLogReg();
} else {
    renderApp()
}