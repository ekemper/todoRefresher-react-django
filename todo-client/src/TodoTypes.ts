import z from 'zod'

const TodoSchema = z.object({
    "task": z.string(),
    "completed": z.boolean(),
    "timestamp": z.string(),
    "updated": z.string(),
    "user": z.number()
})

export const TodosSchema = z.array(TodoSchema)

export type Todo = z.infer<typeof TodoSchema>

export type Todos = z.infer<typeof TodosSchema>