function solution(phone_number) {
    numArr = [...phone_number]
    let fourNumArr = numArr.slice(phone_number.length - 4,phone_number.length)
        for(let i = 0; i<phone_number.length - 4; i++){
        fourNumArr.unshift("*")
    }
    const coveredNum = fourNumArr.join("")
    
    return coveredNum
}


//문자열을 배열로 만들고
//slice 하고 push 하면 되겠는디

//배열로 만들어서 slice(phone_number.length - 4,phone_number.length)가 되나 
//배열의 길이 -4만큼 push 하면 되나? 

//다른 쉬운 방법은 없나?
