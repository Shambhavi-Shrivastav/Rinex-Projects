function call(v) {
    document.getElementById('i').value += v
}

function equal() {
    let ans = document.getElementById('i').value
    document.getElementById('i').value = eval(ans)
}