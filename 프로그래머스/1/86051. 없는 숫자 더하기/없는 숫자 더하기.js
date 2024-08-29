function solution(numbers) {
    const completeArr = [0,1,2,3,4,5,6,7,8,9];
    let newArr = [];
    let sum = 0;
    for(let i = 0; i<completeArr.length; i++){
        if (Boolean(numbers.find((e) => e === completeArr[i])) === false){
            sum = sum + completeArr[i]
            // newArr.push(completeArr[i])}
    }}
        return sum;
    
        // var filteredArr = completeArr.filter((num)=>{return num !== numbers[i]})
        // 
        // console.log(filteredArr);
    }
    
    
//     var answer = -1;
//     return answer;


//0-9까지 새 배열 하나 만들고
//numbers와 같은 요소 삭제하고 for문 안에서 filter(() => numbers === arr))
//나머지 더하면 될듯