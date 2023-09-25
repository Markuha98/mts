const initialState = {
  messages: ["Hello"] as string[],
};

type Action = { type: string; payload: string };

const messageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default messageReducer;
