# git 大厂代码提交原则

- 开发目录
   pwd 当前按的目录地址 一切皆文件
   git init
   初始化代码目录为代码仓库
   -反馈成功初始化一个代码仓库
     git仓库不能嵌套
       .git 文件夹 仓库的秘密，不要动它
       默认 master/main 主分支
       HEAD 指针指向第一次提交
       暂存区和仓库两部分
- 本地代码仓库
-git 是一个版本控制系统，开源
    仓库里放的是文件的多个版本
-为什么把一个文件添加到仓库需要
    git add
    git commit 两步
    严格的代码提交
    git add 添加一个文件/修改  文件
    html css js 三个文件一起构成 一次任务，login页的开发
    git commit -m 'login页开发完成'
    1:n 仓库
    git add 把文件添加进暂存区 stage
    git commit 仓库了

-git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

-严格
    代码提交之前一点要人间清醒
    当前的修改和上一次的修改 改了哪些地方
    git diff 比较修改 在提交前用

- commit -m '' 不能乱写，写清楚完成了什么任务
    -leader以后就看-m 后的东西了解 我们的工作
-git status 随时了解使用这个命令了解我们当前仓库状态
-git log 
    打印所有的提交
    唯一的ID hash
    HEAD 指针，只想目前的最后一次提交
    master 代表分支 main
    --oneline 每条记录只打印一条
-可以通过git rest快速来到任务的一个版本 version control 懂了，小猪
    git reset --herd HEAND^ 
        将指针回调 ^的数量表示回退的次数 herd表示强制
    git reset --herd id 可以去到指定的版本
-git reflog 打印所有操作记录

-changes + untracked 