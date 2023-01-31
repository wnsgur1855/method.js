// if... else 문 대신에 쓸 수 있는 간단한 연산자
// 다시말해 세 개의 피연산자를 받는 유일한 연산자입니다.
// 형식 :  조건문 ? 참일경우(true) : 거짓일 경우(false)표현식이 배치된다
// +false 표현식에는 null, NaN, 0, 비어있는 문자열(""), undefined가 있다.

// 예시 하나
function solution(n) {
    let answer = ''
    for(let i =0; i < n; i++) {
        i % 2 === 0 ? answer += '수' : answer += '박'
        return answer;
    }
}
solution('수박')

// -->이걸 더 간단하게 표현하자면

function solution(n) {
    let answer = ''
    for(let i =0; i < n; i++) answer += i % 2 === 0 ?  '수' :  '박'         //for문 중괄호 안에 한 줄이면  중괄호를 제외하고 그 다음줄에 붙여쓸 수 있따.
        console.log(i)
        return answer;
    
}
solution('수박')