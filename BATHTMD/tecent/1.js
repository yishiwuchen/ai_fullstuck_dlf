//函数要注意什么
//编写一个 函数，返回一个美国座机格式的电话号码（123） 4567-890
//输入是数字数组[1,2,3,4,5,6,7,8,9,0]
//不要急于写功能，先写注释
//大厂，代码的可读性甚至比功能重要一个等级
//不用读代码，看完注释拿来就用

//注释范例

//@func 返回美国格式的座机号码   解释函数用途
//@param {arry} nums [1234567890]     标注函数输入要求
//@return {string} (123)456-7890   标注函数返回规格
//@author zy 2023/10/31
function createPhoneNumber(nums){
    return "(" + nums[0] + nums[1] + nums[2] + ")" 
    + nums[3] + nums[4] + nums[5] + "-" 
    + nums[6] + nums[7] + nums[8] + nums[9]//换行提高代码的可读性
}

//js里的函数还能怎么写 es6+ 语法
//const createPhoneNumber = (nums)=>{}
// let createPhoneNumber //undefined 类型未定义 let声明了undefined
// //箭头函数  es6  间接  作用省略function 代码体只有返回值可以神略return
// createPhoneNumber=(nums)=>"(" + nums[0] + nums[1] + nums[2] + ")" 
// + nums[3] + nums[4] + nums[5] + "-" 
// + nums[6] + nums[7] + nums[8] + nums[9]//函数表达式来定义一个函数   即与nums类型相同


 createPhoneNumber([1,2,3,4,5,6,7,8,9,0])



 //还有别的实现方法码？