export function Message(id,editStatus, message, role, date = new Date().toISOString()) {
    this.id = id;
    this.message = message;
    this.role = role;
    this.date = date;
    this.editStatus = editStatus;
}