export type MessageType = {
    message: string,
}

export type AddMessage = {
    type: string;
    payload: MessageType[];
}