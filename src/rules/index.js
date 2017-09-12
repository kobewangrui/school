export default {
    phoneCheck:{
        test: /^1[34578]\d{9}$/,
        message: '电话号码格式不正确'
    },
    onlyNumber:{
        test: /^[0-9]*$/,
        message: '仅支持输入纯数字'
    }
}