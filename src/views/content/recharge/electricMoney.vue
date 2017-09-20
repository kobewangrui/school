<style scoped lang="css">
    .electric{
        padding: 0 .9rem;
        box-sizing: border-box;
        margin-bottom: 1.35rem;
    }
    .electric p{
        font-size: .34rem;
        color: #757575;
        border-bottom: .01rem solid #dfdfdf;
        padding: .15rem 0;
        box-sizing: border-box;
    }
    .electric p.toggleList{
        display:flex;
        justify-content: space-between;
    }
    .electric p.toggleList span{
        transform: scale(.8,1.8);
    }    
    .electric p label{
        font-size: .34rem;
    }    
    .electric p.inputItem input{
        width: 3.2rem;
        font-size: .38rem;
    }
    .history button{
        font-size: .34rem;
        color: #bbb;
        width: 100%;
        height: .88rem;
        border-radius: .08rem;
        background: #E9EbEC;
        height: .88rem;
        line-height: .88rem;
        border-radius: .08rem;
    }
    .history button.active{
        background: #2cb8ee;
        color: #fff;
    }
    .history .PayHistory{
        color: #2cb8ee;
        font-size: .3rem;
        text-align: center;
        margin-top: .2rem;
    }	
</style>
<style lang="css">
    .electricChangeYdui .room .yd-cityselect-nav{
        padding: 0;
    }
    .electricChangeYdui .room .yd-cityselect-nav>a{
        width: 100%;
        max-width: 100%;
        text-align: center;
        padding: 0;
        margin-right: 0;
    }
    .electricChangeYdui .room .yd-cityselect-content .yd-cityselect-item{
        width: 100%;
        max-width: 100%;
        text-align: center;
        flex: 0 0 100%;
    }
    .electricChangeYdui .room .yd-cityselect-content .yd-cityselect-item-box{
        padding: 0;
    }
    .electricChangeYdui .room .yd-cityselect-item-box > a{
        font-size: .32rem;
    }
    .electricChangeYdui .room .yd-cityselect-item-active:after{
        content: '';
    }
    .electricChangeYdui .room input,
    .electricChangeYdui .floor input{
        width: 50%;
        font-size: .32rem;
    }
    .electricChangeYdui .room .yd-cityselect-item-active,
    .electricChangeYdui .room .yd-cityselect-nav-active,
    .electricChangeYdui .floor .yd-cityselect-item-active,
    .electricChangeYdui .floor .yd-cityselect-nav-active{
        color: #2cb8ee!important;
    }
    .electricChangeYdui .room .yd-cityselect-nav-active:after,
    .electricChangeYdui .floor .yd-cityselect-nav-active:after{
        background-color: #2cb8ee!important;
    }
    .electricChangeYdui .room .yd-cityselect-item-box>a span,
    .electricChangeYdui .floor .yd-cityselect-item-box>a span,
    .electricChangeYdui .room .yd-cityselect-nav>a,
    .electricChangeYdui .floor .yd-cityselect-nav>a{
        font-size: .32rem;
    }
</style>
<template>
    <div class="electricChangeYdui">
        <div class="electric">
            <p class="toggleList floor">
                <label for="dormitory">宿舍楼：</label>
                <input slot="right" type="text" @click.stop="floorSlide = true" v-model="floor" readonly="readonly" @focus="removeText">
                <yd-cityselect v-model="floorSlide" ref="cityselectDemo" :callback="result2" :items="floorData"></yd-cityselect>
                <span> > </span>
            </p>
            <p class="toggleList room">
                <label for="roomNumber">宿舍号：</label>
                <input slot="right" type="text" @click.stop="roomSlide = true" v-model="room" readonly="readonly" @focus="removeText">
                <yd-cityselect v-model="roomSlide" ref="cityselectDemo" :callback="result3" :items="roomNumber"></yd-cityselect>
                <span> > </span>
            </p>
            <p class="inputItem">
                <label for="balanceMoney">剩余电费：</label>
                <input type="text" id="balanceMoney" v-model="balanceMoney">
            </p>
            <p class="inputItem">
                <label for="hasMoney">充值金额：</label>
                <input type="text" id="hasMoney" v-model="hasMoney">
            </p>
        </div> 
        <div class="history">
                <button :class="{'active':$vuerify.check()}">充值</button>
                <router-link tag="p" to="/personalCenter/payList" class="PayHistory">充值记录</router-link>   
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            floorSlide: false,
            roomSlide: false,            
            floor: '',
            room: '',
            balanceMoney:'',
            hasMoney:'',
            floorData:[
                {
                "v": "1",
                "n": "1号楼",
                "c": [
                    {
                        "v": "11",
                        "n": "1层",
                    },
                    {
                        "v": "12",
                        "n": "2层",
                    },
                    {
                        "v": "13",
                        "n": "3层",
                    },
                    {
                        "v": "14",
                        "n": "4层",
                    },
                    {
                        "v": "15",
                        "n": "5层",
                    },
                ]
                },
                {
                    "v": "2",
                    "n": "2号楼",
                    "c": [
                        {
                            "v": "21",
                            "n": "1层",
                        },
                        {
                            "v": "22",
                            "n": "2层",
                        },
                        {
                            "v": "23",
                            "n": "3层",
                        },
                        {
                            "v": "24",
                            "n": "4层",
                        },
                        {
                            "v": "25",
                            "n": "5层",
                        },
                    ]
                }
            ],
            roomNumber:[
                {
                    "v": "1",
                    "n": "101",
                },
                {
                    "v": "2",
                    "n": "202",
                },
                {
                    "v": "3",
                    "n": "303",
                },
                {
                    "v": "4",
                    "n": "404",
                },
                {
                    "v": "5",
                    "n": "505",
                },
                {
                    "v": "6",
                    "n": "606",
                }
                ]
        }
    },
    created(){

    },
    vuerify:{
        floor:['required'],
        room:['required'],
        balanceMoney:['required'],
        hasMoney:['required','moreThanZero'],
    },
    methods:{
        result2(ret){
             this.floor = (ret.itemName1===undefined?'':ret.itemName1) + ' ' + (ret.itemName2===undefined?'':ret.itemName2) + ' ' + (ret.itemName3===undefined?'':ret.itemName3);
        },
        result3(ret){
            this.room = ret.itemName1;
        },
        removeText(e){
            e.target.blur()
        }
    }
}
</script>

