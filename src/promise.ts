interface User {
    name: string;
    email: string;
}

interface GetUserFn {
    (wait: number): void;
}

const users: User[] = [
    { name: 'Isaac Newton', email: 'newton@zsolte.ch' },
    { name: 'Erwin Schröndinger', email: 'sch@zsolte.ch' },
    { name: 'Werner Heisenberg', email: 'heisenberg@zsolte.ch' }
];

function getUsers(wait: number): void {
    setTimeout(() => {
        let output = '';

        users.forEach(user => {
            output += `<li>${user.name} (${user.email})</li>`
        });

        let div = document.querySelector("#mainDiv");
        div.innerHTML = `<ul>${output}</ul>`;
    }, wait);
}

function addUser(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            users.push(user);

            const error = false;

            if (!error) {
                resolve(user);
            } else {
                reject('ERROR: Valami nincs rendben');
            }
        }, 2000);
    });


}

const p0 = addUser({ name: 'Stephen Hawking', email: 'hawking@zsolte.ch' }).then(result => {
    console.log(result);
    getUsers(1000);
}).catch(error => console.log(error));

getUsers(1000);

const p3 = new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 2000, 'Waiting...');
});
const p1 = Promise.resolve('Teszt');
const p2 = Promise.resolve(22);

const p4 = fetch('https://api.github.com/users').then(res => res.json());

p4.then(r => {
    console.log(r);
});


Promise.all([p1, p2, p3, p4]).then(values => console.log(values));