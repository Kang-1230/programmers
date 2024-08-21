function solution(seoul) {
    for(let i = 0; i<seoul.length; i++){
        if (seoul[i] !== "Kim"){
        } else { return `김서방은 ${i}에 있다`}
    }
}

//위치를 어떻게 찾지
// for 문 돌려서 요소 하나하나 확인 후에 kim 발견되면 return 하면 되지 않을까?