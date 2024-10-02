function solution(n) {
    const trit = n.toString(3).split("").reverse().join("")
    const decimal = parseInt(trit,3)
    return decimal
}