function solution(n) {
    let string = n.toString(); //"12345"
    let newnumarr = [];
    for(let i=0; i<=string.length-1; i++){
        let oneLetter = string.slice(i,i+1)
        let newnum = Number(oneLetter)
        newnumarr.unshift(newnum);
    }
    return newnumarr;
}

//자연수 n을 문자열로 만들어서
//문자열의 숫자 하나하나씩 배열에 넣는다. 
//그리고 우째야하노