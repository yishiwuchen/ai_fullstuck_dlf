//箭头函数 arrow function =>
const createPhoneNumber=(nums)=>
//nums.joim('').replace(/(\d{3})(\d{3})(\d{4})/,'($1)$2-$3')
//Array Objedt join函数  作用将数组转化为字符串  Array->string
//repalce 字符串的替换函数
//架构的感觉，字符产模板 一个系列
{let format="(xxx)xxx-xxxx"//字符串模板
for (let i = 0; i < nums.length; i++) {
    format = format.replace('x', nums[i])//替换
}
return format
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))