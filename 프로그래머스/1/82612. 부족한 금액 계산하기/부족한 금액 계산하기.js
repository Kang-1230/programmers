function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i<=count; i++){
        sum = (i * price) + sum
    }
    if (sum - money > 0){
        return sum - money
    } else {return 0}
}
