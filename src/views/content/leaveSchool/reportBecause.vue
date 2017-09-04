<style scoped lang="css">
    .school{
        background: #fff;
        height: 100vh;
    }
    .school .title{
        font-size: .34rem;
        color: #2cb8ee;
        padding: .2rem .3rem;
        background: #f6f6f6;
        box-sizing: border-box;
    }
    .formFill{
        padding: .3rem;
        margin-bottom: 1.25rem;
    }
    .formFill ul{
        font-size: .34rem;
        padding: 0 .8rem;
        box-sizing: border-box;
        margin-bottom: .4rem;
    }
    .formFill ul li{
        margin-bottom: .2rem;
    }
    .formFill input[type='checkbox']{
        display: none;
    }
    .formFill input[type='checkbox']+label:before{
        display: inline-block;
        width: .3rem;
        height: .3rem;
        border: .01rem solid #979797;
        line-height: .3rem;
        font-size: .26rem;
        border-radius: 50%;
        background: #fff;
        content: '.';
        color: #fff;
    }   
    .formFill input[type='checkbox']:checked+label:before{
        background: #2cb8ee;
        border: .01rem solid #2cb8ee;
        content: '\2714';
        color: #fff;
        text-align: center;
    }
    .formFill textarea{
        border: .05rem  dotted #979797;
        padding: .3rem;
        box-sizing: border-box;
        resize: none;
        width: 100%;
        height: 1.86rem;
        border-radius: .08rem;
        font-size: .34rem;
    }
    .formFill button{
        height: .88rem;
        width:100%;
        border-radius: .08rem;
        font-size: .34rem;
        background: #E9EbEC;
        color: #bbb;
    }
    .formFill button.active{
        background:#2cb8ee;
        color: #fff;
    }
</style>
<template>
    <div class="school">
        <p class="title">请选择报校原因</p>
        <div class="formFill">
            <ul>
                <li>
                    <input type="checkbox" id="teacherStrong">
                    <label for="teacherStrong"></label>
                    <label for="teacherStrong">师资力量强大</label>
                </li>
                <li>
                    <input type="checkbox" id="facility">
                    <label for="facility"></label>
                    <label for="facility">教学设备先进</label>
                </li>
                <li>
                    <input type="checkbox" id="environment">
                    <label for="environment"></label>
                    <label for="environment">校园环境好</label>
                </li>
                <li>
                    <input type="checkbox" id="nearSchool">
                    <label for="nearSchool"></label>
                    <label for="nearSchool">离家较近</label>
                </li>
            </ul>
            <textarea placeholder="填写更多描述（选填）"></textarea>
            <button class="active">提交</button>
        </div>
    </div>
</template>
