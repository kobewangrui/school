<style scoped lang="css">
    ul{
        background: #fff;
        padding: 0 .3rem 1.6rem;
        box-sizing: border-box;
    }
    ul li{
        font-size: .34rem;
        display: flex;
        justify-content: space-between;
        padding: .3rem 0;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;
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
            <span>毕业生贷款还贷</span>
            <span class="success"> 已完成 </span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>档案转移</span>
            <span class="more"> > </span>
        </router-link>
        <li>
            <span>学费、住宿费</span>
            <span class="success"> 已完成 </span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>四联单盖章及就业咨询</span>
            <span class="more"> > </span>
        </router-link>
        <li>
            <span>图书归还</span>
            <span class="fail">未完成</span>
        </li>
        <li>
            <span>退宿</span>
            <span class="fail">未完成</span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>团员证补办</span>
            <span class="more"> > </span>
        </router-link>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>户籍转移</span>
            <span class="more"> > </span>
        </router-link>
        <li>
            <span>《车辆通行证》</span>
            <span class="fail">未完成</span>
        </li>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>校园一卡通归还</span>
            <span class="more"> > </span>
        </router-link>
        <router-link to="/leaveSchool/detail" tag="li">
            <span>毕业生党员组织关系转移</span>
            <span class="more"> > </span>
        </router-link>
    </ul>
</template>