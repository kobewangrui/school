<style scoped lang="css">
    ul{
        background: #fff;
        padding:0 .3rem .3rem;
        box-sizing: border-box;
        background: #fff;
    }
    ul li{
        font-size: .34rem;
        display: flex;
        justify-content: space-between;
        padding: .3rem 0;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;
    }
    ul li .more img{
        width: .5rem;
        height: .5rem;
        margin-left: .1rem;
    }    
    ul li .more span,
    ul li .more img{

        vertical-align: middle;
    }
    .intro{
        font-size: .32rem;
        color: #ababab;
        padding: .3rem;
        box-sizing: border-box;
    }
    .intro p{
        margin-bottom: .15rem;
    }
</style>

<template>
    <div>
        <ul>
            <li>
                <span>办理事宜</span>
                <span>户口迁移材料的提交</span>
            </li>
            <li>
                <span>受理部门</span>
                <span>学生处</span>
            </li>
            <li>
                <span>办理地点</span>
                <span>A-201</span>
            </li>
            <li>
                <span>联系人</span>
                <p class="more">
                    <span>胡老师</span>
                    <img :src="require('assets/image/phone.png')">
                </p>
            </li>
        </ul>
        <div class="intro">
            <p>（1）清点并带走宿舍内个人物品后，至各宿舍楼门卫处归还钥匙，并领取《宿舍钥匙已交凭证》（若遗失钥匙，请提前配备好）；</p>
            <p>（2）将《宿舍钥匙已交凭证》交回至辅导员处。</p>
        </div>
    </div>
</template>