import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.test)){
            return
        }

        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        console.log(todo,...todos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.test)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updateTodos);
    }


  return <div>
    <h1>What's your todays plan</h1>
    <TodoForm onSubmit={addTodo}></TodoForm>
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
  </div>;
}

export default TodoList;
