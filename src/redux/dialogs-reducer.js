const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'John'},
        { id: 2, name: 'Peter'},
        { id: 3, name: 'Alex'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m fine, thanks!'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.formData.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (formData) => ({ type:  SEND_MESSAGE, formData});

export default dialogsReducer;