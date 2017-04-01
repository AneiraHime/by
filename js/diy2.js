var VM = new Vue({
    el: "body",
    data: {
        show: {
            selectBody: './images/t-type/tshirt3.jpg',
            yinhuaType: '' // 印花当前显示的tab
        },
        submitData: {
            size: '', // id
            type: '', // id
            color: '', // id
            yinhuaType: '', // name
            yinhua: '', // 最后赋值是对象
            xiubiao: '', // 最后赋值是对象
            yibiao: '', // 最后赋值是对象
            cixiu: '' // 最后赋值是对象
        },
        menus: [{
            text: '印花',
            id: 'yinhua'
        }, {
            text: '袖标',
            id: 'xiubiao'
        }, {
            text: '衣标',
            id: 'yibiao'
        }, {
            text: '刺绣',
            id: 'cixiu'
        }],
        tData: window.tData
    },
    computed: {

    },
    ready: function() {
        var size = getUrlParam('size');
        this.submitData.size = size;

        var type = getUrlParam('type');
        this.submitData.type = type;

        var color = getUrlParam('color');
        this.submitData.color = color;

        this.show.selectBody = 'yinhua';

        this.show.yinhuaType = 'default';
        this.submitData.yinhuaType = 'default';
    },
    methods: {
        showPic: function(item, name) {
            this.submitData[name] = item;
        },
        // 印花要另外处理
        showYinhuaPic: function(item) {
            this.submitData.yinhua = item;
            this.submitData.yinhuaType = this.show.yinhuaType;
        },
        selectMenu: function(item) {
            this.show.selectBody = item.id;
        },
        yinhuaTap: function(name) {
            this.show.yinhuaType = name;
        },
        addYourImg: function() {
            layer.open({
                type: 2,
                content: '加载中',
                time: 2
            });

            setTimeout(function() {
                layer.open({
                    content: '因阿里云服务器故障，请稍候再试',
                    skin: 'msg',
                    time: 2
                });
            }, 2000);
        },
        submit: function() {
            console.log(this.submitData);

            var submitData = this.submitData,
                size = submitData.size,
                type = submitData.type,
                color = submitData.color,
                yinhuaType = submitData.yinhuaType,
                yinhua = submitData.yinhua.id,
                xiubiao = submitData.xiubiao.id,
                yibiao = submitData.yibiao.id,
                cixiu = submitData.cixiu.id;

            var reUrl = './car.html?size=' + size + '&type=' + type + '&color=' + color;

            if (yinhuaType != null) {
                reUrl += '&yinhuaType=' + yinhuaType;
            }

            if (yinhua != null && yinhua != 0) {
                reUrl += '&yinhua=' + yinhua;
            }

            if (xiubiao != null && xiubiao != 0) {
                reUrl += '&xiubiao=' + xiubiao;
            }

            if (yibiao != null && yibiao != 0) {
                reUrl += '&yibiao=' + yibiao;
            }

            if (cixiu != null && cixiu != 0) {
                reUrl += '&cixiu=' + cixiu;
            }

            location.href = reUrl;

        }
    }
});
