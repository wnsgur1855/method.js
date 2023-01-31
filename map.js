// map과foreach의 차이점은 
//map:새로운 배열을 반환하고 내가 원하는 값으로 maping할 수 있음 원본 수정 ㄴㄴ 새로운 배열을 만들어서 반환한다.
// foreach는 원본을 수정한다.

// 어떤 배열에 있는 모든 요소들의 값을 변경해서 새로운 배열을 써야 할 때가 있다
// 그 때 루프를 사용하여 배열에 대해 수동으로 반복처리하는 대신, 간단히 기본 제공(array.map())메소드를 이용 ㄱ

let arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]*3;
}
console.log(arr); // [3,6,9,12,15]

// -->바꾸면
function solution(arr) {//선언
let value = 0;
let arr1 = arr.map(value) ({
    return  value * 3
});
console.log(arr1)
}
solution([3,5])//호출

map vs Set
map은 객체(object)와 비슷 -- > 객체를 모델
set은 배열(Array)과 비슷 --> 배열을 모델

map() 쉽게 말해 객체만으로 데이터를 저장하고 다루기에 조금은 부족한 듣ㅅ 하여 새로운 자료구조 형태를 하나 더 만든 것
객체와 매우 유사하나 nap은 좀 더 다양한 자료형을 허용한다라는 점
map함수도for문과 완전히 같진 않지만 거의 비슷하다고보면 된다
형식 : arr.map(value, index)