// function solution(arr, divisor) {
//     let answer = [];
//      for(let i =0; i < arr.length; i++) {
//          if(arr[i] % divisor == 0) {
//              answer.push(arr[i]) 
//          } 
//      }
//         //1. 오름차순 : 정렬 정수값으로
//         //2. elment가 하나도 없을때 배열 [-1]
//         //3. 2번은  if문으로 한다!(삼항연산자사용하면 편함)
//          console.log(answer);
     
//  }
//  solution([5, 9, 7, 10], 5)



function solution(arr, divisor) {
    let answer = [];
     for(let i =0; i < arr.length; i++) {
        answer = (arr[i]%divisor==0) ? answer.push(arr[i]) : [-1]
         } 
        return answer.sort((a,b) =>a-b)
     }
     
     
     
     solution([5, 9, 7, 10], 5)
       
     
 
 