import { AddMessage, MessageType } from "../../types/messageTypes";

export const addMessage = (payload: MessageType[]): AddMessage => ({
  type: "ADD_MESSAGE",
  payload,
});
