//const wrapper_containers = render_wrapper_DOM ()

/*
    renderApp || render logReg baserat på om localstorage är set
*/

if( !localStorage.getItem('token')) {
    renderLogReg();
} else {
    renderApp()
}