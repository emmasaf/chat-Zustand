import {MESSAGE_TYPE_TEXT} from "../consts";

export function Message(editStatus, message, role,type=MESSAGE_TYPE_TEXT) {
    this.id = Date.now();
    this.message = message;
    this.role = role;
    this.date =  new Date().toISOString();
    this.editStatus = editStatus;
    this.type = type;
}