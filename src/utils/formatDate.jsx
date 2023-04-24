import {format, parse} from 'date-fns';

export const formatDate = (dateString) => {
    if (dateString) {
        const date = parse(dateString, 'dd.MM.yyyy, HH:mm:ss', new Date());
        const formattedDate = format(date, "MMM dd, yyyy HH:mm 'UTC' X");

        const utcOffset = -4;

        return `As of: ${formattedDate} UTC ${utcOffset}`;
    }
    return ''
}
export const historyFormatDate = (dateString) => {
    if (dateString) {
        const dateObj = new Date(dateString);
        const newDateStr = format(dateObj, "MMM d, yyyy");
        return newDateStr
    }
    return ''
}