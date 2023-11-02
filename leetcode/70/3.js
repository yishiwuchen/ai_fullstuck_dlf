//不用递归，for 循环
//自底向上 递推
const climStairs=function(n){
    const f=[];
    f[1]=1;
    f[2]=2;
    for(let i=3;i<=n;i++){
        f[i]=f[i-1]+f[i-2];
    }
}