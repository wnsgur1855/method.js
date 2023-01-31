// foreach()는 배열을 순회하면서 인자로 전달한 함수를 호출하는 반복문 입니다. 배열뿐만아니라, set이나 map에서도 사용 가능합니다
// currentvalue:현재 값   index:현재 인덱스
const arr = ['apple', 'kiwi', 'large','small'];
function solution(name) {
    console.log(name);
}
arr.forEach(solution);
//-----------------------------------------------------
arr.forEach((name)=>{
    console.log(name);
});
//-----------------------------------------------------
arr.forEach((name,index) =>{
    console.log("인덱스:"+ index + "이름:" + name);
});
//-----------------------------------------------------
arr.forEach((name, index, arr) => {
    console.log("인덱스: " + index + ", 이름: " + name
        + ", arr[" + index + "]: " + arr[index]);
  });

//   for문 대신 forEach를 쓰는 이유
//   for는 동기방식이기 때문에 for문 안에 오류가 나면 에러 위치 이후의 이벤트들은 동작하지 않고 멈춰버린다.
//   forEach는 ES6문법으로 콜백함수를 뿌린다. 비동기 방식으로 진행되기 때문에 forEach문 안에 에러가 발생하더라도 멈추지 않고 동작한다. 대신 원하는 순서와 다르게 동작할 수 있음
//   단점 : 1>반복문 내에서 배열이나 리스트 값을 변경하거나 추가할 수 없다.
//          2> 배열을 역순으로 탐색할 수 없다
a.forEach(value, index)
console.log(value)
// 문제
function solution(a, b) {
    let answer = 0;
    let n =a.length
        for(let i = 0; i<n ; i++){
     answer += a[i]*b[i]
       } 
            return answer
    
    }
//위 for문을 forEach문으로 바꿔본다

function solution(a,b) {                         //a와b의 배열 길이가 같기 때문에 굳이 구분 안 해도 된다.
    let answer = 0;                              //i 인덱스 어필을 안 해주었기 때문에 틀렸었다.
    a.forEach((x , i) => {                       //x는 a배열이 value값이기때문에 a[i]가 value값을 가리키기때문에 둘은 같다
        answer += x*b[i]
    })
    return answer
}


//1.내적을 return한다. a와 b의 같은 인덱스끼리 곱해서 더한 값을 return한다.
//map, forEach에서 return을 그냥 할 경우 undefined를 반환한다. (but for문은 return으로 빠져나오는 게 가능하다)




//**간단히 사용법 익히기
for( let i = 0; i < n; i++) {
    answer += a[i]&b[i]
}

forEach((cur, idx) => {
    answer += cur*b[i]          //cul은 currentvalue 그 자체이기때무에 [i]를 불러올 필요가 없다. 
})                              // 즉 a[i] = cur