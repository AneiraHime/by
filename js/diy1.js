var VM = new Vue({
    el: "body",
    data: {
        show: {
            selectBody: ''
        },
        submitData: {
            imgSrc: '',
            size: '',
            type: '',
            color: ''
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
        this.submitData.imgSrc = this.typeList[0].imgSrc;
        this.show.selectBody = 'size';
    },
    methods: {
        showThis: function(item) {
            if (item.imgSrc) {
                this.submitData.imgSrc = item.imgSrc;
            }

            this.submitData[this.show.selectBody] = item.text;
        },
        selectMenu: function(item) {
            this.show.selectBody = item.id;
        },
        submit: function() {
            console.log(this.submitData);

            var reUrl = './diy2.html';

            var imgSrc = this.submitData.imgSrc;
            if (imgSrc && imgSrc != '') {
                reUrl += '?imgSrc=' + imgSrc;
            }

            var size = this.submitData.size;
            if (size && size != '') {
                reUrl += '&size=' + size;
            }

            var type = this.submitData.type;
            if (type && type != '') {
                reUrl += '&type=' + type;
            }

            var color = this.submitData.color;
            if (color && color != '') {
                reUrl += '&color=' + color;
            }

            location.href = reUrl;
        }
    }
});
