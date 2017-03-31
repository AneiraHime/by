var VM = new Vue({
    el: "body",
    data: {
        show: {
        },
        submitData: {
            size: '', // id
            type: '', // id
            color: '', // id
            yinhuaType: '', // name
            yinhua: '', // id
            xiubiao: '', // id
            yibiao: '', // id
            cixiu: '' // id
        },
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

        var yinhuaType = getUrlParam('yinhuaType');
        this.submitData.yinhuaType = yinhuaType;

        var yinhua = getUrlParam('yinhua');
        this.submitData.yinhua = yinhua;

        var xiubiao = getUrlParam('xiubiao');
        this.submitData.xiubiao = xiubiao;

        var yibiao = getUrlParam('yibiao');
        this.submitData.yibiao = yibiao;

        var cixiu = getUrlParam('cixiu');
        this.submitData.cixiu = cixiu;

    },
    methods: {
        submit: function() {
            console.log(this.submitData);

            var submitData = this.submitData,
                size = submitData.size,
                type = submitData.type,
                color = submitData.color,
                yinhuaType = submitData.yinhuaType,
                yinhua = submitData.yinhua,
                xiubiao = submitData.xiubiao,
                yibiao = submitData.yibiao,
                cixiu = submitData.cixiu;

            var reUrl = './detail.html?size=' + size + '&type=' + type + '&color=' + color + '&yinhua=' + yinhua + '&xiubiao=' + xiubiao + '&yibiao=' + yibiao + '&cixiu=' + cixiu;

            location.href = reUrl;

        }
    }
});
