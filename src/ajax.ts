let div = document.querySelector('#mainDiv');
let button = document.createElement('button');
button.innerText = 'github';

div.appendChild(button);

button.addEventListener('click', getUser);

function getUser(ev: Event): void {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users');

    xhr.onload = function () {
        if(this.status == 200) {
            console.log(this.responseText);

            let response = JSON.parse(this.responseText);
            let output = '';

            response.forEach(user => {
                output += `<li> <img src="${user.avatar_url}" height="100px"/> ${user.login} </li>`;
            });

            div.innerHTML = `<ul>${output}</ul>`;
        }
    }
    xhr.send();
}