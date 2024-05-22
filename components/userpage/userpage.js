renderUserPage();

async function getCurrentUser(){
    const user = await STATE.get('user');
    console.log(user);
    return user;
}
