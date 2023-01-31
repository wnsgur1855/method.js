// 배열을 문자열로 바꿔주는 함수

let arr = ['1','2','3','4','5']
arr.toString();             //'1','2','3','4','5'


function solution(participant, completion) {
    return participant.filter(x=>!completion.includes(x))       //["문자"]
    }
// 를 바꿔보면

function solution(participant, completion) {
    return participant.filter(x=>!completion.includes(x)).toString()    //"문자"
    }
