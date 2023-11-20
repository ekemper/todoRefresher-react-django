import { FC } from "react"
import { useQuery } from '@tanstack/react-query'
import apiClient from "./apiClient"
import CoolDot from "./CoolDot"

const TodoList: FC = () => {

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: apiClient.fetchTodoList,
    })

    return (
        <div>
            {
                isPending
                    ? <div>LOADING...</div>
                    : <pre className='todo-list'>{JSON.stringify(data, null, 4)}</pre>
            }

            {isError ? <pre>{JSON.stringify(error)}</pre> : <></>}
            <CoolDot />
        </div>
    )
}

export default TodoList