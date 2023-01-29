function solution(arr, divisor) {
    let Arr = arr.sort((a,b) => a-b)
    let Answer = arr.filter (x => (x % divisor ===0))
    if (Answer.length == 0) {
    Answer.push(-1)
    } return Answer
    }
    // 우선 filter은 해석 그대로 걸러주는 역할을 하는 함수입니다. 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용한다.
    //1. arr배열을 오름차순 한다.
    //2. arr배열을 filter한다. x(요소elemetn)를 (x % divisor ===0) 이 값들만 남기고 다 필터시킨다
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(number => number > 3);

console.log(numbers);
// [1, 2, 3, 4, 5];
console.log(result);
// [4, 5]
let fucking = number.filter(x => x>3);
let fuck = number.filter(y => y%divisor===1)