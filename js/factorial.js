const factorial = (num) => {
    let multiply = 1
    for(let i = num; i > 0; i--){
        multiply = multiply * i
    }
    return multiply
}


module.exports.factorial = factorial;
