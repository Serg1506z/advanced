const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export function getArray(obj, sorted = []){
    if(sorted.length === 0) {
        return obj
    }
    const arr = Object.entries(obj) // создаем массив пар [ключ, значение]
    const sortArr = [...arr.filter((item, index) => {
        if(sorted.includes(item[0])){ 
            arr.splice(index, 1)
            return true
        } else {
            return false
        }
    }), ...arr.sort()] // создаем новый массив куда добавлем те элементы ключи которых лежат в массиве sorted, а потом добавляем оставшиеся в алфавитном порядке
    

    return sortArr.map(item => ({key: item[0], value: item[1]})) //создаем из массива пар - массив объектов
}

console.log(getArray(obj, ["name", "attack"]))