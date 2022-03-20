const APIURL = "https://api.hithub.com/users"

async function getUser() {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData);
}

function createUserCard(user) {

}