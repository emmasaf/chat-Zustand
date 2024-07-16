import {LOCAL_DATA} from "../../consts";

export function getLocalData(){
    const name = LOCAL_DATA;

    if(localStorage.getItem(name)){
        return JSON.parse(localStorage.getItem(name));

    }else{
        return null;
    }
}