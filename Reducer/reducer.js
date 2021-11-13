export const initalState = []

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Math.random(), title: `Todo title${state.length + 1}`}]
        case "ADD_POST":
            return [...state, { id: Math.random(), title: action.payload.title, content: action.payload.content }]
        case "REMOVE":
            return state.filter((post) => action.payload !== post.id)
        case "UPDATE_POST":
            return state.map(record => {
                if (action.payload.id === record.id)
                    return action.payload
                else
                    return record
            })
        default:
            return state
    }
}