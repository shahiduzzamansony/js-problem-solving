const numbers = [14, 58, 21, 798, 64, 34, 81, -29, 75, 68, 92];
function positivenumbers(numbers) {
    let collectedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 0) {
            collectedNumbers.push(number);
        }
        else {
            break;
        }
    }
    return collectedNumbers;
}
const result = positivenumbers(numbers);
console.log(result);