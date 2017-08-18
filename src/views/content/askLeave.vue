<style lang="css" src="assets/css/askLeave.css" scoped></style>
<template>
    <div>
        <p class="leaveTime">本学期第一次请假</p>
        <div class="dateTime">
            <div>
                <p>开始时间</p>
                <p>点击选择</p>
            </div>
            <div>
                <p>结束时间</p>
                <p>点击选择</p>
            </div>
        </div>
        <div class="because">
            <textarea  placeholder="请输入请假事由（必填）"></textarea>
        </div>
        <div class="uploadImg">
            <p>图片</p>
            <div class="imgList">
                <img :src="require('assets/image/uploadImg.png')" accept="image/*">
            </div>
        </div>
        <div class="studentMsg">
            <p>计算机多媒体1401班</p>
            <p>王睿龙</p>
        </div>
         <div class="btnSubmit"> 
            <button class="btn">提交</button>
         </div> 
    </div>
</template>
