function solution(n) {
    let remainder = [];
    for(let i = 1; i<=n; i++){
        if (n%i === 1){
        remainder.push(i);
    }}
    remainder.sort(function(a,b){
        return a-b;
    })
    
    return remainder[0];
}


//n을 x로 나눈 나머지가 1인 자연수를 뽑아서 배열로 만들어야겠다
//배열을 내림차순으로 정렬해야겠다
//배열의 [0]인덱스 숫자를 뽑아야겠다