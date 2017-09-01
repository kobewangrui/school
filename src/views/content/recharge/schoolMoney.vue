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
    .electric p label{
        font-size: .34rem;
    }    
    .electric p input{
        width: 3.95rem;
        font-size: .38rem;
    }
</style>

<template>
    <div class="electric">
        <p>
            <label for="userName">账号：</label>
            <input type="text" id="userName">
        </p>
        <p>
            <label for="balance">余额：</label>
            <input type="text" id="balance">
        </p>
        <p>
            <label for="pay">充值：</label>
            <input type="text" id="pay">
        </p>
    </div> 
</template>
