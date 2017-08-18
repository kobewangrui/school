<style src="assets/css/consult.css" scoped lang="css"></style>
<template>
    <div>
         <section class="connect">
            <p class="intro">为了方便即时沟通，可以选择以下方式，备注校名即可</p>
            <ul class="connectWay">
                <li>
                    <img :src="require('assets/image/wechat.png')">
                </li>
                <li>
                    <img :src="require('assets/image/QQ.png')">
                </li>
                <li>
                    <img :src="require('assets/image/telephone.png')">
                </li>
            </ul>
            <p class="intros">或者，在申请留言时备注自己的任意联系方式</p>
            <div class="textArea">
                <textarea placeholder="请描述当前遇到的困惑/方便的时间"></textarea>
            </div>
            <p class="sendPerson">
                <input id="name" type="checkbox">
                <label for="name" class="btnRadio">
                    <i></i>
                </label>
                <label for="name">匿名发送</label>
                <button>发送</button>
            </p>
        </section>
        <p class="teacherIntro">老师会在第一时间与你联系~</p>
    </div>
</template>
