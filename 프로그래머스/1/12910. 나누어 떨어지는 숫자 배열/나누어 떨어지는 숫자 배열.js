function solution(arr, divisor) {
   let divisibleValue = []
   for(let i = 0; i<arr.length; i++){ 
    if (arr[i]%divisor === 0){
        divisibleValue.push(arr[i])
    }}
    
    if (divisibleValue.length === 0){
        return [-1]
    }
    divisibleValue.sort((a,b) =>a-b)
    return divisibleValue;}


//array를 for문으로 돌려서 divisor로 나눈다. 
//나누어 떨어지는 element가 하나도 없다면<<이걸 우째하노 -1을 반환한다. 
//값을 오름차순으로 정렬한다.
