import { observable, autorun } from 'mobx';

const state = observable({
  todo: 'Learn MobX Basics',
  done: false
});

function onTodoClick() {
  state.done = !state.done;
}

function paint() {
  document.getElementById('app').innerHTML = `
<h2>${state.todo} (${state.done ? 'done' : 'not done'})</h2>
`;
}

autorun(() => {
  paint();
});

document.getElementById('toggle').addEventListener('click', onTodoClick);
