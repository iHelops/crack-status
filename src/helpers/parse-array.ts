export const parseArray = (item: string) => {
    let newItem = undefined;
    try {
        newItem = JSON.parse(item)
    } catch (_) {}

    return newItem || (item ? [item] : [])
}