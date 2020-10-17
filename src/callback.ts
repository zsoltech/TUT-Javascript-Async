interface User {
    name: string;
    email: string;
}

interface GetUserFn {
    (wait: number): void;
}

const users : User[] = [
    { name: 'Isaac Newton', email: 'newton@zsolte.ch' },
    { name: 'Erwin Schröndinger', email: 'sch@zsolte.ch' },
    { name: 'Werner Heisenberg', email: 'heisenberg@zsolte.ch' }
];

function getUsers(wait: number) :void {
    setTimeout(() => {
        let output = '';

        users.forEach(user => {
            output += `<li>${user.name} (${user.email})</li>`
        });

        let div = document.querySelector("#mainDiv");
        div.innerHTML = `<ul>${output}</ul>`;
    }, wait);
}

function addUser(user: User, callback: GetUserFn): void {
    setTimeout(() => {
        users.push(user);
        callback(1000);
    }, 2000);
}

addUser({ name: 'Stephen Hawking', email: 'hawking@zsolte.ch' }, getUsers);

getUsers(1000);
