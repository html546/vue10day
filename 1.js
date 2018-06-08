let arr = [1,2,3,4,5];
arr.b = '100';
/* for(let i = 0;i<arr.length;i++){ //编程式
    console.log(arr[i]);
} */
//面试: forEach for...in for for...of
//foreach不支持return 
/* arr.forEach(function(item){ //声明式,不关心如何实现
    console.log(item);
}) */

for(let key in arr){ //key会变成字符串类型,包括数组的私有属性也可以打印出来
    console.log(typeof key);
}

for(let val of arr){//支持return,只能是值of数组(不能遍历对象)
    console.log(val);
}

let obj = {school:'zfpx',age:8};
// ['school','age']
/* for(let val of Object.keys(obj)){//Object.keys 将对象的key作为新的数组
    console.log(obj[val]); 
} */

//2)filter 是否操作原数组:不 返回结果:过滤后的新数组 回调函数的返回结果:如果返回true,表示这一项放到新数组中
/* [1,2,3,4,5].filter(function(item){
    return item<5&&item>2;
}) */