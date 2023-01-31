//.includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드이다
// searching: 검색할 문자열로 필수요소이다. 대소문자를 구분
// length :  검색을 시작할 위치이다. 선택 요소로 , 값이 없으면 전체 문장려을 대상으로 한다.
// string.includes( searchString, length )

let arr = ['a', 'b', 'b', 'd', 'e']

console.log(arr.includees('e'))