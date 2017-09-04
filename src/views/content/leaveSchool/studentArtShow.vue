<style scoped lang="css">
    .art{
        font-size: .34rem;
        background: #fff;
        padding-bottom: 1.6rem;
        min-height: 100vh;
    }
    .art .title{
        background: #f6f6f6;
        padding: .2rem .3rem;
        box-sizing: border-box;
    }
    .art .item{
        text-align: center;
        margin-bottom: .2rem;
    }
    .art .list{
        text-align: center;
        color: #2CB8EE;
        display: flex;
        justify-content: center;
        flex-flow:  row wrap;
    }
    .art .list span{
        margin-bottom: .1rem;
    }    
    .art .list span:not(:first-child){
        margin-left: .9rem;
    }
    .art .other,
    .art .formFill{
        padding: .3rem;
        box-sizing: border-box;
    }
    .art .other p{
        border: .05rem  dotted #979797;
        padding: .3rem;
        box-sizing: border-box;
        resize: none;
        height: 1.86rem;
        border-radius: .08rem;
        font-size: .34rem;
    }
</style>
<template>
    <div class="art">
        <p class="title">您会的文体特长</p>
        <div  class="formFill">
            <p class="item">音乐类-乐器演奏</p>
            <p class="list">
                <span>民族乐器</span>
            </p>
        </div>
        <div  class="formFill">
            <p class="item">音乐类-舞蹈</p>
            <p class="list">
                <span>民族舞</span>
                <span>国际舞</span>
            </p>
        </div>
        <div  class="formFill">
            <p class="item">音乐类-舞蹈</p>
            <p class="list">
                <span>民族舞</span>
                <span>国际舞</span>
            </p>
        </div>
        <div  class="formFill">
            <p class="item">音乐类-舞蹈</p>
            <p class="list">
                <span>民族舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
            </p>
        </div>
        <div  class="formFill">
            <p class="item">音乐类-舞蹈</p>
            <p class="list">
                <span>民族舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
            </p>
        </div>
        <div  class="formFill">
            <p class="item">音乐类-舞蹈</p>
            <p class="list">
                <span>民族舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
                <span>国际舞</span>
            </p>
        </div>
        <div class="other">
            <p>我还会golf</p>
        </div>
    </div>
</template>
