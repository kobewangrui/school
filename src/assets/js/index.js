export default{
    data(){
        return{
            titleList:[],
            articleList:[]
        }
    },
    created(){
    // 获取顶部大标题列表
    this.getTitleList()
    // 获取首页消息列表
    this.getMsgList()
    },
    methods:{
        getMsgList(){
            this.$http.post('/api',{name:'smart_campus.article.list'},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    console.log(res.body.data)
                    this.articleList = res.body.data.list
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        },
        getTitleList(){
            this.$http.post('/api',{name:'smart_campus.hometab.list'},{emulateJSON:true}).then((res)=>{
                if(res.body.code === 1000){
                    this.titleList = res.body.data.list
                }else{
                    console.log(res.body.msg)
                };
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}