function sumInput() {
    let input = document.querySelector('#num');
    let nums = [];
    let okBtn = document.querySelector('#ok');
    let readyBtn = document.querySelector('#ready');
    okBtn.addEventListener("click", enterNums);
    function enterNums()
    {
let value = input.value;
if (!isNaN(value)) {
    alert ('введите число')
    input.value = '';
    nums.push(+value);
}
else {
alert ('Введеное значение не является числом');
showResult(nums)
}
}
}
function showResult(arr) {
arr.sort();
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert('filtered: ' +  arr + ' sum: ' + sum);
}
sumInput()