import {LOCAL_DATA} from "../../consts";

export function saveLocalData(data) {
    const name = LOCAL_DATA;
    const newData = JSON.stringify(data)
    localStorage.setItem(name, newData)

    return true
}