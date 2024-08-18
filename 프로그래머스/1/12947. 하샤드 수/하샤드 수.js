function solution(x) {
    const string = x.toString();
    const stringSpread = [...string]
    const numberArr = stringSpread.map(Number);
    let sum = 0;
    for (let i = 0; i<numberArr.length; i++){
        sum += numberArr[i];
    }
    if (x%sum === 0){
        return true
    } else {
        return false
    }
    return divide
}

    //x을 문자열로 교체
    //문자열을 spread operator로 하나씩 나눔
    //배열의 모든 요소를 숫자로 바꾸고 모두 더하기
    //x/sum % ===0 이면 true 아니면 false