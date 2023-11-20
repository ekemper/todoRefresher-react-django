import { FC } from "react"
import { useQuery, useQueryClient } from '@tanstack/react-query'
import apiClient from "./apiClient"

const LoadingIndicator: FC = () => {
    return <div>LOADING...</div>
}

const TodoList: FC = () => {
    const queryClient = useQueryClient()

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: apiClient.fetchTodoList,
    })

    return (
        <div>
            {
                isPending
                    ? <LoadingIndicator />
                    : <pre className='todo-list'>{JSON.stringify(data, null, 4)}</pre>
            }

            {isError ? <pre>{JSON.stringify(error)}</pre> : <></>}
        </div>
    )
}

export default TodoList