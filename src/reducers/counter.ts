enum types {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
}

interface Action {
    type: types
}

interface State {
    count: number
}

interface Props {
    initialState: State
}


const counterReducer = (state: State, action: Action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { count: state.count + 1 }
        case types.DECREMENT:
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}

export default counterReducer;

