function solution(n) {
    const num = n
    const string = num.toString();
    const spread = [...string]; // ["문","자","열"]
    const sort = spread.sort((a,b)=>{
        return b-a
    })
    const merge = sort.join('');
    const returnNum = Number(merge);
    return returnNum;
}




//정수 n을 문자열로 바꾸고
//하나씩 떼서 - slice? slice는 배열 메서드라서 안됨
//정렬해서
//다시 붙여서
//숫자로 바꾸기