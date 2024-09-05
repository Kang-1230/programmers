function solution(s) {
    const stringArr = s.split("")
    let sumStringArr = ()=>{
        if (stringArr.length %2 === 0){
        return [stringArr[(stringArr.length/2)-1] , stringArr[(stringArr.length)/2]]} else {return (stringArr[(stringArr.length-1)/2] )}
    }
    
    const result = sumStringArr()
    if (Array.isArray(result)){
        
        const joinNumArr = result.join('');
        return joinNumArr;
    } else {return sumStringArr();}
    
}
    
    


//split 함수를 사용해서 문자열을 나누고 
//단어 s의 길이를 구해서
//길이/2, 길이/2+1 인덱스인 원소를 가져와서
//두글자면 합친다