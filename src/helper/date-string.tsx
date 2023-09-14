export const getDateKRString = (date: Date) => {
    const newDate: Date = new Date(date);
    return `${newDate.getFullYear()}년 ${newDate.getMonth()+1}월 ${newDate.getDate()}일`;
}