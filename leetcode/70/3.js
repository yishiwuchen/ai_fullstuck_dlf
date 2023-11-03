//不用递归，for 循环
//自底向上 递推 dp 动态规划
const climStairs=function(n){
    const f=[];//优化
    f[1]=1;
    f[2]=2;
    for(let i=3;i<=n;i++){
        //递推公式
        f[i]=f[i-1]+f[i-2];
    }
    return f[n];
}