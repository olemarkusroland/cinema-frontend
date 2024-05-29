import dayjs from "dayjs";

export const formatDate = (date) => {
    const matchingDate = dayjs(date, 'YYYY-MM-DD');

    if (!matchingDate.isValid()) {
        return '';
    }

    if (matchingDate.isSame(dayjs(), 'day')) {
        return <span>Today, {matchingDate.format('ddd DD. MMM')}</span>;
    } else if (matchingDate.isSame(dayjs().add(1, 'day'), 'day')) {
        return <span>Tomorrow, {matchingDate.format('ddd DD. MMM')}</span>;
    } else {
        return <span>{matchingDate.format('ddd DD. MMM')}</span>;
    }
};