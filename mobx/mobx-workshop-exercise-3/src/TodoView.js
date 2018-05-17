import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export class TodoView extends React.Component {
    render() {
        const { todo } = this.props;
        return (
            <li key={todo.id}>
                <input id={`input-${todo.id}`} type="checkbox" checked={todo.done} onClick={todo.toggle.bind(todo)} />
                <label htmlFor={`input-${todo.id}`}>{todo.title}</label>
            </li>
        );
    }
}
