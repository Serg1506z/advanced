const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function getArray(obj, sorted){
    const arr = Object.entries(obj)
    const sortArr = [...arr.filter((item, index) => {
        if(sorted.includes(item[0])){
            arr.splice(index, 1)
            return true
        } else {
            return false
        }
    }), ...arr.sort()]

    return sortArr.map(item => ({key: item[0], value: item[1]}))
}

console.log(getArray(obj, ["name", "attack"]))