
    function solution(arr1, arr2) {
    let sumArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);  // 같은 위치의 값들을 더함
        }
        sumArr.push(row);  // 결과 배열에 더한 값들을 저장
    }

    return sumArr;
}

