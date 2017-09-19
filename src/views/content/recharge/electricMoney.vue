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
</style>

<template>
    <div class="electric">
        <p class="toggleList">
            <label for="dormitory">宿舍楼：</label>
            <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请填写宿舍地址">
            <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :items="district" provance="新疆" city="乌鲁木齐市" area="天山区"></yd-cityselect>
            <span> > </span>
        </p>
        <p class="toggleList">
            <label for="roomNumber">宿舍号：</label>
            <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请填写宿舍地址">
            <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :items="district" provance="新疆" city="乌鲁木齐市" area="天山区"></yd-cityselect>
            <span> > </span>
        </p>
        <p class="inputItem">
            <label for="balanceMoney">剩余电费：</label>
            <input type="text" id="balanceMoney">
        </p>
        <p class="inputItem">
            <label for="HasMoney">充值金额：</label>
            <input type="text" id="HasMoney">
        </p>
    </div> 
</template>
<script>

export default {
    data(){
        return{
            show2: false,
            model2: '',
            district:[{
                "v": "1",
                "n": "北京",
                // "c": [
                //     {
                //         "v": "2816",
                //         "n": "密云区",
                //         // "c": [
                //         //     {"v": "6667", "n": "城区"},
                //         //     {"v": "2862", "n": "城区以外"}
                //         // ]
                //     },
                    // {
                    //     "v": "72",
                    //     "n": "朝阳区",
                        // "c": [
                        //     {"v": "2819", "n": "三环到四环之间"},
                        //     {"v": "2839", "n": "四环到五环之间"},
                        //     {"v": "2840", "n": "五环到六环之间"}
                        // ]
                    // },
                // ]
            }]
        }
    },
    methods:{
        result2(ret){
             this.model2 = (ret.itemName1===undefined?'':ret.itemName1) + ' ' + (ret.itemName2===undefined?'':ret.itemName2) + ' ' + (ret.itemName3===undefined?'':ret.itemName3);
        }
    }
}
</script>

