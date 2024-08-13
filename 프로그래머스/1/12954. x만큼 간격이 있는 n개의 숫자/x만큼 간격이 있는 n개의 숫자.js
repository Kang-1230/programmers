function solution(x, n) {
    let answerArr = [];
    for(let i = 1; i <= n; i++) {
        answerArr.push(x * i);
    }
    return answerArr;
}

// 반복문을 이용해서 (x*i)n 표현하기