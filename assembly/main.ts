import {
  storageModal,
  PostedStorageMessage,
  stroageList,
} from "./model";

// --- contract code goes below

// The maximum number of latest messages the contract returns.
const MESSAGE_LIMIT = 10;

/**
 * Adds a new message under the name of the sender's account id.\
 * NOTE: This is a change method. Which means it will modify the state.\
 * But right now we don't distinguish them with annotations yet.
 */
export function addStorage(tableObj: storageModal): void {
  const message = new PostedStorageMessage(tableObj);
  stroageList.push(message);
}
export function getStorageMessage(): PostedStorageMessage[] {
  const numMessages = min(MESSAGE_LIMIT, stroageList.length);
  const startIndex = stroageList.length - numMessages;
  const result = new Array<PostedStorageMessage>(numMessages);
  for (let i = 0; i < numMessages; i++) {
      result[i] = stroageList[i + startIndex];
  }
  return result;
}
/**
 * Returns an array of last N messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
// export function getMessages(): PostedMessage[] {
//   const numMessages = min(MESSAGE_LIMIT, messages.length);
//   const startIndex = messages.length - numMessages;
//   const result = new Array<PostedMessage>(numMessages);
//   for (let i = 0; i < numMessages; i++) {
//     result[i] = messages[i + startIndex];
//   }
//   return result;
// }
