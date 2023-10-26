const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    // console.log(input);
    if (input.value.trim() !== '') {
        const inputValue = input.value;
        const inputWithoutSpaces = inputValue.replace(/\s/g, '');
        const regex = /^[a-zA-Z]+\d+$/;
        
        if (regex.test(inputWithoutSpaces)) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.innerHTML = input.value;
            deleteButton.textContent = '❌';

            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
            })

            input.value= '';
            input.focus();
        } else {
            alert('Please include chapter number after book name.');
            input.focus();
        }

    } else {
        alert('Input cannot be empty.');
        return input.focus();
    }
});