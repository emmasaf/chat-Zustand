import dayjs from "dayjs";

export function formatTime(date) {
    const newDate = dayjs(date).format('Z A')
    return  newDate.slice(1);
}
