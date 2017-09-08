import Vue from 'vue'
Vue.filter('formatDate',(value,discount)=>{
    if(value !=='' && value !== undefined){
        typeof value === 'string' ? value = parseInt(value) : value;
        let d = new Date(value),
            year = d.getFullYear(),
            month = d.getMonth()+1,
            day = d.getDate(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds();
            hour === 24 ? hour = 0 : hour;
            if(hour === 0){
                day += 1;
            }
        // 年
        value = year + '-' +
        // 月
        (month > 9 ? month : '0' + month) + '-' +
        // 日
        (day > 9 ? day: '0' + day) + ' ' +
        // 时
        (hour > 9 ? hour : '0' + hour) + ':' +
        // 分
        (minute > 9 ? minute: '0' + minute) + ':' +
        // 秒
        (second > 9 ? second: '0' + second)
    }    
    return value
})
// 过滤后的格式为：YYYY-MM-DD hh:mm:ss