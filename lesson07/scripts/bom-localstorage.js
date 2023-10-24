const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Place the stored data
const innerHTMLString = localStorage.getItem("currentList");

if (innerHTMLString) {
    list.innerHTML = innerHTMLString;
}

// Add an event listener to the list for handling delete clicks
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Find the closest <li> element to the clicked button
        const li = event.target.closest('li');
        if (li) {
            list.removeChild(li);
            // Store the updated list in localStorage
            localStorage.setItem("currentList", list.innerHTML);
        }
    }
});

button.addEventListener('click', () => {
    if (input.value !== '') {
        // Create new item
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.innerHTML = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();

        // Store the updated list in localStorage
        localStorage.setItem("currentList", list.innerHTML);
    } else {
        return input.focus();
    }
});
