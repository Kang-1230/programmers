function solution(arr) {
    let newArr = [...arr]
    newArr.sort((a,b) => a-b)
    const filteredArr = arr.filter((e) => e !== newArr[0])
    if (Boolean(filteredArr.length) === false){
        return [-1]
    }
    return filteredArr
}
