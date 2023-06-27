export const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('ru-RU')
}