<style scoped lang="css">
    ul{
        background: #fff;
        padding: 0 .3rem;
        box-sizing: border-box;
        height: 100vh;
    }
    ul li{
        font-size: .34rem;
        display: flex;
        justify-content: space-between;
        padding: .3rem 0;
        box-sizing: border-box;
        border-bottom: .01rem solid #dcdcdc;
    }
    ul li .fail{
        font-size: .32rem;
        color: #757575;
    }
    ul li .success{
        font-size: .32rem;
        color: #fb6155;
    }
    ul li .more{
        transform: scale(.8,1.8);
    }
</style>

<template>
    <ul>
        <li>
            <span>入学报道</span>
            <span class="fail"> 未完成 </span>
        </li>
        <li>
            <span>学杂费</span>
            <span class="success"> 已缴纳 </span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>户口迁移材料的提交</span>
            <span class="more"> > </span>
        </router-link>
        <li>
            <span>保险箱的租借</span>
            <span class="success"> 已租借 </span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>关于转专业</span>
            <span class="more"> > </span>
        </router-link>
        <router-link tag="li" to="/leaverSchool/arg">
            <span>文体特长</span></span>
            <span class="fail">未提交</span>
        </router-link>
        <router-link to="/leaveSchool/reportBecause" tag="li">
            <span>报考学校的原因</span></span>
            <span class="fail">未提交</span>
        </router-link>
    </ul>
</template>