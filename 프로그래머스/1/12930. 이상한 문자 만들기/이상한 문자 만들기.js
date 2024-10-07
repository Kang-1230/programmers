function solution(s) {
    let answer = "";
    const separatedWord = s.split(" ")
    
    for (let i = 0; i< separatedWord.length; i++){
        for(let j = 0; j<separatedWord[i].length; j++){
            if(j%2 === 0){
                answer += separatedWord[i][j].toUpperCase();
            } else {
                answer += separatedWord[i][j].toLowerCase();
            }
        }
        if (i < separatedWord.length -1){
            answer += ' ';
        }
    }
    return answer;
    }

//공백 기준으로 split
//다 나눠서 짝, 홀 해야 하나?
