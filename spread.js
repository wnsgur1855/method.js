배열일때(array) spread
// function myFunction(x, y, z) { 
// var args = [0, 1, 2];
// console.log(args)
// var args2 = [...args]   //결괏값이 arr.slice()와 유사하다
// args2.push(4)
// console.log(args2)
// }
// myFunction([1]);

문자열일때(string) spread
// function myFunction(x, y, z) { 
//     var args = '123';
//     console.log(args)
//     var args2 = [...args]   
//     args2.push(4)
//     console.log(args2)
//     }
//     myFunction('1');

//spread는 배열의 형태 안에 value값을 보여준다. + 쪼개서 넣는다(=split된다는 의미와 같음)
//split는 쪼개서 배열로 반환한다.

배열 안 문자일때
// function myFunction(x, y, z) { 
//     var args = ['123'];
//     console.log(args)
//     var args2 = [...args]                //배열 안에 문자열 넣었으 땐 값이 반환이 안 된다.
//     args2.push(4)
//     console.log(args2)
//     args.split('')
//     }
//     myFunction(1);

숫자일때
// function myFunction(x, y, z) { 
//     var args = 123;
//     console.log(args)
//     var args2 = [...args]           //한 마디로 숫자만 있을 땐 SPREAD를 못 쓴다.  값이 안 나온다.(주어진 값이 문자열일때 숫자일때 쓰자)
//     console.log(args2)
//     args2.push(4)                 //push는 배열일 경우에만 쓸 수 있다.
//     console.log(args2)
//     args.split('')
//     console.log(args)               //split했는데 값이 안 나온다.
//     }
//     myFunction(1);