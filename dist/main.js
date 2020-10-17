const users = [
    { name: 'Isaac Newton', email: 'newton@zsolte.ch' },
    { name: 'Erwin Schröndinger', email: 'sch@zsolte.ch' },
    { name: 'Werner Heisenberg', email: 'heisenberg@zsolte.ch' }
];
function getUsers(wait) {
    setTimeout(() => {
        let output = '';
        users.forEach(user => {
            output += `<li>${user.name} (${user.email})</li>`;
        });
        let div = document.querySelector("#mainDiv");
        div.innerHTML = `<ul>${output}</ul>`;
    }, wait);
}
function addUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            const error = false;
            if (!error) {
                resolve(user);
            }
            else {
                reject('ERROR: Valami nincs rendben');
            }
        }, 2000);
    });
}
getUsers(1000);
async function initialize() {
    await addUser({ name: 'Stephen Hawking', email: 'hawking@zsolte.ch' });
    getUsers(1);
}
initialize();
async function fetchUser() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
}
fetchUser();
