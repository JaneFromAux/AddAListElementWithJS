
let userInput = document.querySelector('#userinput');
let enter = document.querySelector('#enter');

enter.addEventListener('click', () => {
    let inputty = userInput.value;
    let newList = document.createElement('li');
    newList.textContent = inputty;
    let uli = document.body.children[0].children[4];
    uli.appendChild(newList);
});

document.body.addEventListener('keydown', () => {
    if (event.key == "Enter") {
        let inputty = userInput.value;
        let newList = document.createElement('li');
        newList.textContent = inputty;
        let uli = document.body.children[0].children[4];
        uli.appendChild(newList);
    }
});

