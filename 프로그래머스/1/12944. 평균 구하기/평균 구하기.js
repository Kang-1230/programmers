function solution(arr) {
    var answer = 0;
    for (let i = 0; i<arr.length; i++){
        (answer += arr[i])
    }
    
    return answer/arr.length;
}

//배열의 객체를 모두 더해서 (arr[0]+arr[1]+arr[2] ... +arr[arr.length]) - 반복문 사용
//배열의 길이만큼 나눈다 /(arr.length)