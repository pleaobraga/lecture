
export const formateDate = (date) => {
    let formateDate = new Date(date),
        day = formateDate.getDay() > 9 ? formateDate.getDay() : '0' + formateDate.getDay(),
        month = formateDate.getMonth() + 1 > 9 ? formateDate.getMonth() + 1 : '0' + (formateDate.getDay() + 1),
        year = formateDate.getFullYear();

    
    return `${month}/${day}/${year}`
}