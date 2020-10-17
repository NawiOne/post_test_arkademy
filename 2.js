const find = (str) => {
    const text = str.split('')
    const res = text.find((item, index, arr) => {
        return arr.lastIndexOf(item) != index
    })
    return `Karakter pertama yang berulang adalah ${res}`
}
console.log(find('ABFKGFU'))