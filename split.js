// split은 쪼개서 문자열을 담은 배열로 반환한다.
// split()
// split(separator)
// split(separator, limit)
//사용법 :  문자열.split(구분자(separator), limit)

// separator이 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환된다.
// separator가 생략되었을 경우 배열은 원본 문자열을 유일한 원소로 가진다.
// separator가 빈 문자열일 경우 str은 문자열의 모든 문자를 원소로 가지는 배열로 반환된다. -->

function solution(str) {
let answer = "나는 빡빡이다.";
let spliting = answer.split("", 3)
console.log(spliting)
}
solution("")



console.log( '------------------------------------------- split() 1' );
let someStr = "진도는 한국에서 제주도와 거제도 다음으로 큰 섬이다.";
let splitted = someStr.split( " ", 3 );
console.log( splitted );  // 진도는, 한국에서, 제주도와

console.log( '------------------------------------------- split() 2' );
let someStr2 = "진도, 제주도, 거제도, 독도, 마라도";
let splitted2 = someStr2.split( ", ", 4 );
console.log( splitted2 ); // ['진도', '제주도', '거제도', '독도']

console.log( '------------------------------------------- split() 3' );
let someStr3 = "진도, 제주도, 거제도, 독도, 마라도";
let splitted3 = someStr3.split( ", " );  // 분할 갯수 옵션이 지정되지 않으면 문자열 전부를 잘라서 배열로 리턴.
console.log( splitted3 ); 			// "진도","제주도","거제도","독도","마라도"
console.log( splitted3.length );  // 5
console.log( splitted3[splitted3.length - 1] );  // 마라도

// 문자열에서 공백제거하기
// 끊는 횟수 제한하기
// RegExp를 사용해 구분자도 결과에 포함하기
// 배열을 구분자로 사용하기
// split()으로 문자열 뒤집기 : var strReverse = str.split('').reverse().join('');


