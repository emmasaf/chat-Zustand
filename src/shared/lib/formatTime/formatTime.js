import dayjs from "dayjs";

export function formatTime(date) {
    return  dayjs(date).format('h:mm A');
}
