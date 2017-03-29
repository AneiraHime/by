var VM = new Vue({
    el: "body",
    data: {
        show: {
            selectBody: './images/t-type/tshirt3.jpg',
            yinhuaType: 'default' // 印花当前显示的犀利
        },
        submitData: {
            imgSrc: '',
            size: '',
            type: '',
            color: '',
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
        yinhuaObj: window.tData.yinhuaObj,
        xiubiaoList: window.tData.xiubiaoList,
        yibiaoList: window.tData.yibiaoList,
        cixiuList: window.tData.cixiuList
    },
    computed: {

    },
    ready: function() {
        var imgSrc = getUrlParam('imgSrc') || './images/t-type/tshirt3.jpg';
        this.submitData.imgSrc = imgSrc;

        var size = getUrlParam('size') || '';
        this.submitData.size = size;

        var type = getUrlParam('type') || '';
        this.submitData.type = type;

        var color = getUrlParam('color') || '';
        this.submitData.color = color;

        this.show.selectBody = 'yinhua';
    },
    methods: {
        showPic: function(item, name) {
            this.submitData[name] = item;
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
        }
    }
});
