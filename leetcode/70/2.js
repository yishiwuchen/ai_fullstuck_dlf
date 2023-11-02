//怎么办？ 递归带来的内存问题
//递归的优点是什么？ 简单 性能不好
//如果不往执行栈里铺设太多层函数，是不是？


//两种做法
//入栈过的函数是没有必要再入栈的，记忆法
const f=[];//全局变量
const climbStaire= function(n){
    //退出条件
    if(n===1) return 1;
    if(n===2) return 2;
    if(f[n]===undifned){//第一次
        // 函数嵌套函数
        f[n]= climbStaire(n-1)+climbStaire(n-2);//递归公式
    return f[n];
    }
}