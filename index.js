
const input = document.getElementById('button');
function addingEventListener() {
    input.addEventListener('click', addingEventListener);
    alert('I was clicked!');
}
addingEventListener();


