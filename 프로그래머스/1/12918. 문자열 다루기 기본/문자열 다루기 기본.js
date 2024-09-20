function solution(s) {
    const stringArr = [...s];
    if (stringArr.length === 4 || stringArr.length === 6){
        return stringArr.every((string)=>isNaN(Number(string)) === false)
    }  else {
        return false
    }
}

