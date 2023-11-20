
// import Todo from './TodoTypes'


const HELLA_HARDCODED_TOKEN = '4b520c29d3e7a62e621640540b866cd97d1c0ed2'


const defaultOptions = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${HELLA_HARDCODED_TOKEN}` ,
    }
} as RequestInit // TODO : WTF?

const todoApiUrl = `http://localhost:8000/todos/api`

const apiClient = {
    fetchTodoList: async () => {
        const response = await fetch(todoApiUrl, defaultOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    },
    createTodo: async (newTodo: any) => {
        const response = await fetch(todoApiUrl, {method: 'POST', body: newTodo, ...defaultOptions})
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()  
    }
}

export default apiClient


// curl -H 'Accept: application/json; indent=4' -u ek:12345 http://127.0.0.1:8000/todo/api

// curl -X GET http://127.0.0.1:8000/todos/api -H 'Authorization: Token 4b520c29d3e7a62e621640540b866cd97d1c0ed2'