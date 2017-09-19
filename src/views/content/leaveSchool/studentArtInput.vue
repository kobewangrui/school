<style scoped lang="css">
    .art{
        font-size: .34rem;
        background: #fff;
        padding-bottom: 1.6rem;
    }
    .title{
        background: #f6f6f6;
        color: #2CB8EE;
        padding: .2rem .3rem;
        box-sizing: border-box;
    }
    .formFill{
        padding: .3rem;
        box-sizing: border-box;
    }
    .formFill ul{
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        padding: 0 1.2rem;
    }
    .formFill ul li{
        width: 50%;
        box-sizing: border-box;
        margin-top: .2rem;
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
        margin: .4rem 0 .3rem;
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
    .formFill .other{
        margin-bottom: .4rem;
    }
    .formFill .other img{
        width: .6rem;
        height: .6rem;
    }
    .formFill .other img,
    .formFill .other span{
        vertical-align: middle;
    }    
    .formFill .other label:nth-child(2){
        margin-right: .1rem;
    }    
    /* 弹框 */
    .pop{
        font-size: .32rem;
        width: 5.9rem;
        background: #fff;
        border-radius: .08rem;
        position: absolute;
        z-index: 2;
        margin: 0 auto;
        top: 50%;
        left: 50%;
        margin-left: -2.95rem;
        margin-top: -2.85rem;
        text-align: center;
        padding: .15rem 0 .35rem;
        box-sizing: border-box;
        transition: all .2s;
        transform: scale(0,0);
    }
    .pop p{
        margin-bottom:.15rem;
    }
    .pop p:last-child{
        margin-top: .35rem;
    }
    .pop img{
        width: 1.8rem;
        height: 2.07rem;
    }
    .pop input{
        font-size: .32rem;
        width: 4.38rem;
        height: .76rem;
        border: 1px solid #d2d2d2;
        padding: 0 .2rem;
        box-sizing: border-box;
        border-radius: .06rem;
    }
    .pop .intro{
        color: #7e7e7e;
        font-size: .36rem;
    }
    .pop button{
        width: 1.6rem;
        height: .64rem;
        font-size: .32rem;
        border-radius: .06rem;
        color: #fff;
        background: #2cb8ee;
    }
    .popShow{
        transform: scale(1,1);
    }
    .cover{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>
<template>
    <!-- 没填写特长时候 -->
    <div class="art">
        <p class="title">勾选您会的文体特长（多选）</p>
        <div  class="formFill">
            <p>音乐类-演唱</p>
            <ul>
                <li>
                    <input type="checkbox" id="songOne" v-model="sing" value="songOne">
                    <label for="songOne"></label>
                    <label for="songOne">美声</label>
                </li>
                <li>
                    <input type="checkbox" id="songTwo" v-model="sing" value="songTwo">
                    <label for="songTwo"></label>
                    <label for="songTwo">民族</label>
                </li>
                <li>
                    <input type="checkbox" id="songThree" v-model="sing" value="songThree">
                    <label for="songThree"></label>
                    <label for="songThree">通俗</label>
                </li>
                <li>
                    <input type="checkbox" id="songFour" v-model="sing" value="songFour">
                    <label for="songFour"></label>
                    <label for="songFour">原生态</label>
                </li>
            </ul>
        </div>
        <div  class="formFill">
            <p>音乐类-舞蹈</p>
            <ul>
                <li>
                    <input type="checkbox" id="danceOne" v-model="dance" value="danceOne">
                    <label for="danceOne"></label>
                    <label for="danceOne">民族舞</label>
                </li>
                <li>
                    <input type="checkbox" id="danceTwo" v-model="dance" value="danceTwo">
                    <label for="danceTwo"></label>
                    <label for="danceTwo">国际舞</label>
                </li>
                <li>
                    <input type="checkbox" id="danceThree" v-model="dance" value="danceThree">
                    <label for="danceThree"></label>
                    <label for="danceThree">芭蕾舞</label>
                </li>
                <li>
                    <input type="checkbox" id="danceFour" v-model="dance" value="danceFour">
                    <label for="danceFour"></label>
                    <label for="danceFour">现代舞</label>
                </li>
            </ul>
        </div>
        <div  class="formFill">
            <p>音乐类-乐器演奏</p>
            <ul>
                <li>
                    <input type="checkbox" id="instrumentOne" v-model="instrument" value="instrumentOne">
                    <label for="instrumentOne"></label>
                    <label for="instrumentOne">民族乐器</label>
                </li>
                <li>
                    <input type="checkbox" id="instrumentTwo" v-model="instrument" value="instrumentTwo">
                    <label for="instrumentTwo"></label>
                    <label for="instrumentTwo">西洋乐器</label>
                </li>
            </ul>
        </div>
        <div  class="formFill">
            <p>美术类</p>
            <ul>
                <li>
                    <input type="checkbox" id="drawOne" v-model="draw" value="drawOne">
                    <label for="drawOne"></label>
                    <label for="drawOne">绘画</label>
                </li>
                <li>
                    <input type="checkbox" id="drawTwo" v-model="draw" value="drawTwo">
                    <label for="drawTwo"></label>
                    <label for="drawTwo">书法</label>
                </li>
                <li>
                    <input type="checkbox" id="drawThree" v-model="draw" value="drawThree">
                    <label for="drawThree"></label>
                    <label for="drawThree">摄影</label>
                </li>
                <li>
                    <input type="checkbox" id="drawFour" v-model="draw" value="drawFour">
                    <label for="drawFour"></label>
                    <label for="drawFour">插花艺术</label>
                </li>
                <li>
                    <input type="checkbox" id="drawFive" v-model="draw" value="drawFive">
                    <label for="drawFive"></label>
                    <label for="drawFive">插花艺术</label>
                </li>
            </ul>
        </div>
        <div  class="formFill">
            <p>语言类</p>
            <ul>
                <li>
                    <input type="checkbox" id="languageOne" v-model="language" value="languageOne">
                    <label for="languageOne"></label>
                    <label for="languageOne">播音主持</label>
                </li>
                <li>
                    <input type="checkbox" id="languageTwo" v-model="language" value="languageTwo">
                    <label for="languageTwo"></label>
                    <label for="languageTwo">戏剧表演</label>
                </li>
            </ul>
        </div>
        <div  class="formFill">
            <p>体育类</p>
            <ul>
                <li>
                    <input type="checkbox" id="sportOne" v-model="sport" value="sportOne">
                    <label for="sportOne"></label>
                    <label for="sportOne">球类</label>
                </li>
                <li>
                    <input type="checkbox" id="sportTwo" v-model="sport" value="sportTwo">
                    <label for="sportTwo"></label>
                    <label for="sportTwo">田径</label>
                </li>
                <li>
                    <input type="checkbox" id="sportThree" v-model="sport" value="sportThree">
                    <label for="sportThree"></label>
                    <label for="sportThree">体操</label>
                </li>
                <li>
                    <input type="checkbox" id="sportFour" v-model="sport" value="sportFour">
                    <label for="sportFour"></label>
                    <label for="sportFour">武术</label>
                </li>
                <li>
                    <input type="checkbox" id="sportFive" v-model="sport" value="sportFive">
                    <label for="sportFive"></label>
                    <label for="sportFive">太极</label>
                </li>
                <li>
                    <input type="checkbox" id="sportSix" v-model="sport" value="sportSix">
                    <label for="sportSix"></label>
                    <label for="sportSix">水上项目</label>
                </li>
            </ul>
            <textarea placeholder="更多文体特长（选填）"></textarea>
            <p class="other">
                <input type="checkbox" id="other" v-model="other" value="other">
                <label for="other"></label>
                <label for="other">我一样也不会</label>
                <img :src="require('assets/image/noArt.png')">
            </p>
            <button :class="{'active':$vuerify.check(['sport'])||$vuerify.check(['sing'])||$vuerify.check(['dance'])||$vuerify.check(['draw'])||$vuerify.check(['instrument'])||$vuerify.check(['language'])||$vuerify.check(['other'])}" @click="submit">提交</button>
            
        </div>        
        <div class="pop" :class="{'popShow':popHandle}">
            <p>
                <img :src="require('assets/image/noFill.png')" alt="">
            </p>
            <p class="intro">您未勾选选项，暂不能提交</p>
            <p>
                <router-link tag="button" to="/leaveSchool/studentArtShow" @click="submit">确定</router-link>	
            </p>		
        </div>
        <div class="cover" @click="popToggle" v-if="popHandle"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            popHandle:false,
            sing:[],
            dance:[],
            draw:[],
            instrument:[],
            language:[],
            sport:[],
            other:[]
        }
    },
    vuerify:{
        sing:['required'],
        dance:['required'],
        draw:['required'],
        instrument:['required'],
        language:['required'],
        sport:['required'],
        other:['required']
    },
    watch:{
        other:{
    　　　　handler(newValue, oldValue){
                if(newValue[0] === 'other'){
                    this.sing = this.dance = this.draw = this.instrument = this.language = this.sport = [];
                }
            },
            deep:true
        },
        sing:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.dance.length>0 || this.draw.length>0  || this.instrument.length>0  || this.language.length>0  || this.sport.length>0){
                    this.other = []
                }
            },
            deep:true            
        },
        dance:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.sing.length>0 || this.draw.length>0  || this.instrument.length>0  || this.language.length>0  || this.sport.length>0){
                    this.other = []
                }
            },
            deep:true            
        },
        draw:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.dance.length>0 || this.sing.length>0  || this.instrument.length>0  || this.language.length>0  || this.sport.length>0){
                    this.other = []
                }
            },
            deep:true            
        },
        instrument:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.dance.length>0 || this.draw.length>0  || this.sing.length>0  || this.language.length>0  || this.sport.length>0){
                    this.other = []
                }
            },
            deep:true            
        },
        language:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.dance.length>0 || this.draw.length>0  || this.instrument.length>0  || this.sing.length>0  || this.sport.length>0){
                    this.other = []
                }
            },
            deep:true            
        },
        sport:{
            handler(newValue,oldValue){
                if(newValue.length>0 || this.dance.length>0 || this.draw.length>0  || this.instrument.length>0  || this.language.length>0  || this.sing.length>0){
                    this.other = []
                }
            },
            deep:true            
        }
    },
    methods:{
        popToggle(){
            window.scrollTo(0, 0);
            this.popHandle = !this.popHandle;
        },
        submit(){
            if(!(this.$vuerify.check(['sport'])||this.$vuerify.check(['sing'])||this.$vuerify.check(['dance'])||this.$vuerify.check(['draw'])||this.$vuerify.check(['instrument'])||this.$vuerify.check(['language'])||this.$vuerify.check(['other']))){
                window.scrollTo(0, 0);
                this.popHandle = !this.popHandle;
            }

        }
    }

}
</script>

