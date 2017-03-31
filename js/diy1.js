var VM = new Vue({
    el: "body",
    data: {
        show: {
            selectBody: '',
            imgSrc: ''
        },
        submitData: {
            size: '', // id
            type: '', // id
            color: '' // id
        },
        menus: [{
            text: '尺码',
            id: 'size'
        }, {
            text: '版型',
            id: 'type'
        }, {
            text: '颜色',
            id: 'color'
        }],
        sizeList: window.tData.sizeList,
        typeList: window.tData.typeList,
        colorList: window.tData.colorList
    },
    computed: {

    },
    ready: function() {
        this.show.imgSrc = this.typeList[0].imgSrc;
        this.show.selectBody = 'size';
    },
    methods: {
        showThis: function(item) {
            if (item.imgSrc) {
                this.show.imgSrc = item.imgSrc;
            }

            // 页面间通过id来传值
            this.submitData[this.show.selectBody] = item.id;
        },
        selectMenu: function(item) {
            this.show.selectBody = item.id;
        },
        submit: function() {
            console.log(this.submitData);

            var errMsg = '',
                size = this.submitData.size,
                type = this.submitData.type,
                color = this.submitData.color;

            if (color.toString().length == 0) {
                errMsg = '请选择颜色';
            }

            if (type.toString().length == 0) {
                errMsg = '请选择版型';
            }

            if (size.toString().length == 0) {
                errMsg = '请选择尺码';
            }

            if (errMsg != '') {
                layer.open({
                    content: errMsg,
                    skin: 'msg',
                    time: 1.5
                });
                return;
            }

            var reUrl = './diy2.html?size=' + size + '&type=' + type + '&color=' + color;

            location.href = reUrl;
        }
    }
});
