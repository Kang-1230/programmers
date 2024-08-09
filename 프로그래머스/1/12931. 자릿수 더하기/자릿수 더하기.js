function solution(n){ 
    const changeString = String(n);
    const changeNum = (changeString) => Number(changeString);
    const newArr = Array.from(changeString, changeNum);
    var answer = 0;
    for(let i = 0; i<newArr.length; i++){
        answer+=newArr[i]
    }
    return answer;
}

//자연수 n을 각 자릿수로 나누기
//자연수 n을 문자열로 바꿔서 문자열을 하나씩 나누는 방법은 없을까?

//n의 모든 인덱스 더하기
