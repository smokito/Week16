function sumInput() {
    let input = document.querySelector('#num');
    let nums = [];
    let enter = document.querySelector('#ok');
    enter.addEventListener("click", enterNums)
    function enterNums() {
    alert ('введите число')
    let value = input.value;
    input.value = ''
    while (true) {
        if (value === null)
        break;
        nums.push(+value);

    }
}
}
sumInput()