<style lang="css" src="assets/css/askLeave.css" scoped></style>
<style lang="css">
    .yd-datetime-head>a{
        font-size: .34rem!important;
    }
    .yd-datetime-head>a:last-child{
        color: #2cb8ee!important;
    }
    .yd-datetime-content .yd-datetime-item{
        font-size: .34rem;
    }
</style>
<template>
    <div>
        <p class="leaveTime">本学期第{{total}}次请假</p>
        <div class="dateTime">
            <div>
                <p>开始时间</p>
                <yd-datetime v-model="start_time" type="datetime" slot="right"></yd-datetime>
                <p>点击选择</p>
            </div>
            <div>
                <p>结束时间</p>
                <yd-datetime v-model="end_time" type="datetime" slot="right"></yd-datetime>
                <p>点击选择</p>
            </div>
        </div>
        <div class="because">
            <textarea  placeholder="请输入请假事由（必填" v-model="reason"></textarea>
        </div>
        <div class="uploadImg">
            <p>图片</p>
            <div class="imgList">
                <addImg @clickImg = "clickImg" :max="10" @imgChange = "imgChange"></addImg>
            </div>
        </div>
        <div class="studentMsg">
            <p>计算机多媒体1401班</p>
            <p>王睿龙</p>
        </div>
         <div class="btnSubmit">
            <button :class="{'btnActive':!$vuerify.check()}" @click="submit">提交</button>
         </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                start_time: this.defaultDate(),
                end_time: this.defaultDate('end'),
                reason:'',
                total:'',
                activeImg: '',
                uploading: false,
                imgs:[],
            }
        },
        created(){
            // 获取该生本学期请假次数
            this.leaveCount()
        },
        vuerify:{
            reason:['required'],
            start_time:['required'],
            end_time:['required']
        },
        methods:{
            clickImg(img){
				this.activeImg = img;
			},
			imgChange(files){
				this.imgs = files;
            },
            upload(){
				var fm = new FormData();
				this.imgs.forEach((img) => {
					fm.append('img', img, `${Math.ceil(Date.now()*Math.random()*10)}.jpg`);
                })
                fm.append('name','smart_campus.upload.img');
                console.log(JSON.stringify(fm));
                this.$http.post('/PcApi',fm,{emulateJSON:true}).then((res)=>{
                    console.log(JSON.stringify(fm));
					if(res.body.code === 1000){
						console.log('上传成功');
					}
				}).catch((error)=>{
					console.log(error);
				})
			},
            defaultDate(i){
                let d = new Date(),
                    Y = d.getFullYear(),
                    M = d.getMonth()+1,
                    D = d.getDate(),
                    HH = d.getHours(),
                    MM = d.getMinutes();
                    if(i==='end'){
                        HH+=1;
                    };
                    M = M<10 ? '0'+M : M
                    D = D<10 ? '0'+D : D
                    HH = HH<10 ? '0'+HH : HH
                    MM = MM<10 ? '0'+MM : MM
                return `${Y}-${M}-${D} ${HH}:${MM}`;
            },
            leaveCount(){
                this.$http.post('/api',{name:'smart_campus.leave.apply.total'},{emulateJSON:true}).then((res)=>{
                    if(res.body.code === 1000){
                        this.total = parseInt(res.body.data.total)+1;
                    }else{
                        console.log(res.body.msg)
                    };
                }).catch((error)=>{
                    console.log(error);
                })
            },      
            submit(){
                if(this.$vuerify.check()){
                    this.$http.post('/api',{name:'smart_campus.leave.apply',start_time:new Date(this.start_time).getTime()/1000,end_time:new Date(this.end_time).getTime()/1000,reason:this.reason,images:''},{emulateJSON:true}).then((res)=>{
                        if(res.body.code !== 1000){
                            this.$router.push('/askForLeave/leaveHistoryStudent')
                        }else{
                            console.log(res.body.msg)
                        };
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            }
        },
        components:{
            addImg:require('components/addImg.vue')
        },
        watch:{
            'imgs':function(){
                this.upload();
            }
        },
    }
</script>