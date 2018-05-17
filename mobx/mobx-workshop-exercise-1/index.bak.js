import {} from 'mobx';

const todo = 'Learn MobX Basics';
const done = false;

function onTodoClick() {}

document.getElementById('app').innerHTML = `
<h2>Todo (done)</h2>
`;

document.getElementById('toggle').addEventListener('click', onTodoClick);
