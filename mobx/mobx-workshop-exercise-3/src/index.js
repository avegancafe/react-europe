import * as React from 'react';
import { render } from 'react-dom';
import { reaction } from 'mobx';

import { TodoStore } from './TodoStore';
import { TodoListView } from './TodoListView';

const store = new TodoStore();

store.addTodo('Get Coffee');
render(<TodoListView store={store} />, document.getElementById('root'));
store.addTodo('Write simpler code');

reaction(
    () => store.unfinishedTodoCount,
    count => {
        console.log(`${count} items left`);
    }
);
