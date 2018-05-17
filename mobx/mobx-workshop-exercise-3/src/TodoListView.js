import * as React from 'react';
import { observer } from 'mobx-react';

import { Header } from './Header';
import { TodoView } from './TodoView';

@observer
export class TodoListView extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                <Header store={store} />
                <ul>{store.todos.map(todo => <TodoView key={todo.id} todo={todo} />)}</ul>
            </div>
        );
    }
}
