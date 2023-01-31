// indexOf() 함수는 
// 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는'첫번째' element의 index를 리턴합니다. 

// lastIndexOf() 함수는 
// 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index 를 리턴합니다.
// 만약 찾으려는 값이 배열에 없다면 -1을 리턴합니다~~

// 이 indexOf는 특정한 value값을 index로 찾고 싶을 때 주로 쓰입니당
// (특정 위치 문자 찾기)

// // 알파벳 찾기
console.clear();
let abcAr1 = "ABCDEFGHIJKLMN";

console.log( '------------------------------- H의 인덱스는?' );
console.log( abcAr1.indexOf( 'H' ) );  // 7


// 역순으로 찾기 --> lastIndexOf()
let abcAr2 = "ABCDEFGHIJKLHMN";

console.log( '------------------------------- H의 인덱스는? 역순' );
console.log( abcAr2.lastIndexOf( 'H' ) );  // 12		/역순이어서 뒤에서부터 계산해서 2가 아니다!

// 이 밖에 indexOf로 혹은 lastIndexOf로 특정 번째의 index가 몇번째 있는지도 알 수 있다/
