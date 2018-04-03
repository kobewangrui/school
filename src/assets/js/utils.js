import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource);
//取queryString
export function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//DateTransformer
export function dateToString(date) {
    let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        mm = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;
    mm = mm < 10 ? '0' + mm : mm;
    h = h < 10 ? '0' + h : h;
    return y + '-' + m + '-' + d;
}
// myalert
export let myAlert = {
    big: function(txt) {
        let div0 = document.createElement('div'),
            div = document.createElement('div');
        div.innerHTML = txt;
        div.classList.add('my-alert');
        div0.appendChild(div);
        div0.classList.add('my-alert-container');
        document.querySelector('body').appendChild(div0);
        setTimeout(() => {
            document.querySelector('body').removeChild(div0);
        }, 1500)
    },
    small: function(txt, time = 1500) {
        return new Promise((resolve) => {
            let div0 = document.createElement('div'),
                div = document.createElement('div');
            div.innerHTML = txt;
            div.classList.add('my-alert');
            div.classList.add('small');
            div0.appendChild(div);
            div0.classList.add('my-alert-container');
            document.body.appendChild(div0);
            setTimeout(() => {
                document.body.removeChild(div0);
                resolve();
            }, time)
        })
    }
}

export function liveAlert(txt){
    liveAlert.prototype.create = () => {
        let div = document.createElement('div');
        div.innerHTML = txt;
        div.classList.add('live-alert');
        document.body.appendChild(div);
        this.alert = div;
    }
    liveAlert.prototype.destroy = () => {
        document.body.removeChild(this.alert);
    }
    liveAlert.prototype.edit = (editTxt) => {
        this.alert.textContent = editTxt;
    }
    this.create();
}

export function loadMore({
    el = '',
    cb = function() {}
} = {
    el: '',
    cb: function() {}
}) {
    this.el = el;
    this.cb = cb;
    this.loading = false;
    loadMore.prototype.toEnd = function() {
        var scrollTop = this.el.scrollTop || document.body.scrollTop,
            pageHeight = this.el ? this.el.getBoundingClientRect().height : window.innerHeight,
            scrollHeight = this.el ? this.el.scrollHeight : document.body.scrollHeight;
        if (scrollTop + pageHeight > scrollHeight - 5) {
            if (this.loading) return;
            this.loading = true;
            this.cb();
        }
    }
    loadMore.prototype.open = function() {
        this.listener = this.toEnd.bind(this);
        this.el ? this.el.addEventListener('scroll', this.listener, false) : window.addEventListener('scroll', this.listener, false);
    }
    loadMore.prototype.close = function() {
        this.el ? this.el.removeEventListener('scroll', this.listener, false) : window.removeEventListener('scroll', this.listener, false);
    }
}

// config里可以保存一下默认配置
export function myHttp(url, data, customBefore = function() {}, config = {}) {
    let la;
    function before(){
        customBefore();
        if(config.tip) la = new liveAlert('提交中..');
    }
    return new Promise((resolve) => {
        let httpSetting = {
            emulateJSON: true,
            root: 'http://wchattest.stiei.edu.cn/rod-repair-app/app',
            before: before
        }
        data.licenseCode = 'E2ECBC62529F0D090EA369022622F74B';
        Vue.http.post(url, data, httpSetting).then((response) => {
            if(la) la.destroy();
            if (response.body.resultCode === '500') {
                myAlert.small(response.body.desc);
                response.body.failed = true;
            }
            resolve(response.body);
        })
    })
}

export function compressImg(img, type){
	var canvas = document.createElement("canvas"),
		ctx = canvas.getContext('2d');
	var tcanvas = document.createElement('canvas'),
		tctx = tcanvas.getContext('2d');
		var initSize = img.src.length;
		var width = img.width;
		var height = img.height;
		var ratio;
		// 强制压缩图片为手机大小先
		if((ratio = width / window.innerWidth) > 1) {
			// ctx的width已经是压缩过的了
			width /= ratio;
			height /= ratio;
		} else ratio = 1;
		canvas.width = width;
		canvas.height = height;
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, width, height);
		// 进行压缩
		var ndata;
		ndata = canvas.toDataURL('image/jpeg', 0.4);

        // 将base64的图片转成二进制对象
        var ndata2 = ndata.split(',')[1];
        ndata2 = ndata2.replace(/\s/g, '');
        var text = atob(ndata2)

        var buffer = new ArrayBuffer(text.length);
        var ubuffer = new Uint8Array(buffer);

        for (var i = 0; i < text.length; i++) {
            ubuffer[i] = text.charCodeAt(i);
        }

        var blob = new Blob([buffer], {type: type});
        blob.lastModifiedDate = new Date();
        return blob;
}

// 订单翻页 仅在本项目中有用~
export function nextPage(router, route) {
    let orders = JSON.parse(localStorage.getItem('orders')),
        index = Number(localStorage.getItem('orderIndex')) + 1,
        requestData = JSON.parse(localStorage.getItem('requestData')),
        order;

    function getOrders() {
        return new Promise((res) => {
            if (index === orders.length) {
                myHttp('getRepairList.do', requestData).then((r) => {
                    const moreOrders = r.obj.dataPage.rows;
                    if (!moreOrders.length) {
                        myAlert.small('已经是最后一张啦', 800).then(() => router.go(-1));
                    }
                    else {
                        orders = orders.concat(moreOrders);
                        ++requestData.pageNumber;
                        res()
                    }
                })
            } else res();
        })
    }
    getOrders().then(() => {
        // console.log('index:' + index);
        order = orders[index];
        localStorage.setItem('orderIndex', index);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('requestData', JSON.stringify(requestData));
        router.replace({
            name: 'Order',
            params: {
                usertype: route.params.usertype,
                id: order.id
            }
        });
    })
}