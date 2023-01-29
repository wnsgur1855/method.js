// isNaN() : 함수는 어떤 값이 NaN인지 판별합니다. isNaN함수는 Number.isNaN으로 바꾸는 것이 좋다. 
// isNaN(value)
// value는 테스트 되는 값
// 반환값으론 주어진 값이NaN이면 true 아니면 false로 반환한다

// 사용 예제
function solution(s) {
    var answer;
    if(s.length === 4 || s.length === 6){
        if(isNaN(s)){ //s가 number이 아니면 false 리턴
            answer = false;
        } else {
            answer = true; // number이면 true 리턴
        }
    } else {
        answer = false;
    }
    
    return answer;
}
// 1. 배열s가 number이 아니면false로 반환한다.
// isNaN()
// isNaN은 is Not a Number이다.
// 매개변수가 숫자가 아닐 경우 true를 리턴하고,
// 매개변수가 숫자일 경우 false를 리턴한다

function solution(s) {

    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }