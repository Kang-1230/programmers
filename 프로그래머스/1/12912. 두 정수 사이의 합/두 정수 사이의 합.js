function solution(a, b) {
    // a와 b 중 작은 값과 큰 값을 결정합니다.
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    
    // start부터 end까지의 배열을 생성합니다.
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    
    // 배열의 모든 요소를 합산합니다.
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}
