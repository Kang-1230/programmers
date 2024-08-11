function solution(n) {
    var sum = 0
    for(let i = 0; i<=n; i++){
        if (n%i === 0){
        sum +=i}
    }
    return sum
}

//n의 약수 : 나눴을 때 나머지가 0인 수 
//for 문을 써서 1~n까지 다 나눠서 나머지가 0인 수만 걸러내면 되겠다. 
//걸러낸 수를 다 더하면 되겠다. 