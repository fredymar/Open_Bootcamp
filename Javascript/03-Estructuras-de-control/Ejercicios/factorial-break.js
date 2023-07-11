result = 1;
i = 1
while (i <= 10) {
    result *= i
    if(result === 362800) break
    else i++
}

console.log(result);