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
            <span> > </span>
        </p>
        <p class="toggleList">
            <label for="roomNumber">宿舍号：</label>
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
