function solution(n) {
    let watermelon = []
    for(let i = 0; i<n; i++){
        i % 2 === 0 ? watermelon.push("수") : watermelon.push("박")
    }
    const sumWatermelon = watermelon.join("");
    return sumWatermelon
}
