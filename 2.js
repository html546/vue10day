/* let arr3 = [1,2,3,4];

let result = arr3.some(function(item,index){
    return item.toString().indexOf(5)>-1;
})
console.log(result); */
//8)reduce 收敛 4个参数  返回的是叠加后的结果 原数组不发生变化，回调函数返回的结果:
//prev代表的是数组的第一项,next是数组的第二项
//第二次prev是undefined,next是数组的第三项
let sum = [1,2,3,4,5].reduce(function(prev,next,index,item){
    // console.log(arguments);
    // console.log(prev,next);
    //return 100;//本次的返回值, 会作为下一次的prev
    return prev+next;
})
// console.log(sum);

let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    // return prev.price*prev.count+next.price*next.count;  
    // console.log(prev,next);
    //0+60
    //60+90
    //150+120
    return prev+next.price*next.count;
},0) //默认指定第一次的prev
console.log(sum2);

//数组扁平化，二维数组转一维数组
let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
    return prev.concat(next);
})
console.log(flat);