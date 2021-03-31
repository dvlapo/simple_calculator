
function print(val) {
    document.getElementById("screen").value += val;
}
function equals() {
    let toSolve = document.getElementById("screen").value;
    let answer = eval(toSolve);
    document.getElementById("screen").value = answer;
}
function clr() {
    document.getElementById("screen").value = '';
}
function backspace() {
    let toClr = document.getElementById("screen").value;
    let bkspace = toClr.slice(0, -1);
    document.getElementById("screen").value = bkspace;
}