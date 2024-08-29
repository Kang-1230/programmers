function solution(numbers) {
    const completeArr = [0,1,2,3,4,5,6,7,8,9];
    let newArr = [];
    let sum = 0;
    for(let i = 0; i<completeArr.length; i++){
        if (Boolean(numbers.find((e) => e === completeArr[i])) === false){
            sum = sum + completeArr[i]
    }}
        return sum;
    }
    