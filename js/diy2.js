var VM = new Vue({
    el: "body",
    data: {
        show: {
            imgSrc: '',
            selectBody: ''
        },
        submitData: {
            yinhua: '',
            xiubiao: '',
            yibiao: '',
            cixiu: ''
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
        yinhuas: [{
            id: '1',
            imgSrc: './images/yinhua/yh1.jpg',
        },{
            id: '2',
            imgSrc: './images/yinhua/yh2.jpg',
        },{
            id: '3',
            imgSrc: './images/yinhua/yh3.jpg',
        }]
    },
    computed: {

    },
    ready: function() {
        // this.show.imgSrc = this.types[0].imgSrc;
        this.show.selectBody = 'yinhua';
    },
    methods: {
        showThis: function(item) {
            if (item.imgSrc) {
                this.show.imgSrc = item.imgSrc;
            }
            this.submitData[this.show.selectBody] = item.text;
        },
        selectMenu: function(item) {
            this.show.selectBody = item.id;
        },
        submit: function() {
            console.log(this.submitData);
        }
    }
});
