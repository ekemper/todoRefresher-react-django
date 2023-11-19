import { FC, useState } from "react"

const TodoList: FC = () => {
    const [todos, setTodos] = useState({'todos': 'not yet :)'})

    return(<pre className='todo-list'>{JSON.stringify(todos, null, 4)}</pre>)
}

export default TodoList