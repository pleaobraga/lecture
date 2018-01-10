
export const formateDate = date => {
    let formateDate = new Date(date),
        day = formateDate.getDate() > 9 ? formateDate.getDate() : '0' + formateDate.getDate(),
        month = formateDate.getMonth() + 1 > 9 ? formateDate.getMonth() + 1 : '0' + (formateDate.getMonth() + 1),
        year = formateDate.getFullYear();

    return `${month}/${day}/${year}`
}

export const sortListByAttribute = (list = [] , attribute) => {
    return list.sort((a, b) => b[attribute]-a[attribute] )
}

export const captalizeFirstLetter = string => {
    return `${string[0].toUpperCase()}${string.substring(1,string.length)}` 
}