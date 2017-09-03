$(function () {

    function RequsetWay() {

    }

    RequsetWay.prototype = {
        // 新增连载数据请求开始
        firstRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/1',
                dataType: 'json',
                success: function (data) {
                    $('#content .list>ul').html(template('template_2', data));
                }
            })
        },
        // 新增连载数据请求结束

        // 新增完结数据请求的开始
        secondRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/2',
                dataType: 'json',
                success: function (data) {
                    $('#content .list>ul').html(template('template_2', data));
                }
            })
        },
        // 新增完结数据请求的结束

        // 推荐连载数据请求的开始
        threeRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/3',
                dataType: 'json',
                success: function (data) {
                    $('#content .list>ul').html(template('template_2', data));
                }
            })
        },
        // 推荐连载数据请求的结束

        // 推荐完结数据请求开始
        fourRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/4',
                dataType: 'json',
                success: function (data) {
                    $('#content .list>ul').html(template('template_2', data));
                }
            })
        },
        // 推荐完结数据请求结束

        //连载动画数据请求开始
        lianzaiRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/getlianzai',
                dataType: 'json',
                success: function (data) {
                    $('.lianZai .list>ul').html(template('template_3', data));
                }
            })
        },
        //连载动画数据请求结束

        // 专题列表书据请求开始
        zhuanTiRequest: function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gettopics',
                dataType: 'json',
                success: function (data) {
                    $('.zhuanTi .list>ul').html(template('template_4', data));
                }
            })
        },
        // 专题列表书据请求结束

        // 主体的滑动
        bodySlid: function () {
            setTimeout(function () {
                $('#doc-oc-demo2').removeClass('am-active');
            }, 200);
            $('body').css('margin-left', '0');
            // $('#doc-oc-demo2 .content').css('transform', 'translateX(-100%)')
            $('#doc-oc-demo2 .content').removeClass('am-offcanvas-bar-active');
        }
    }


    var firstRequset = new RequsetWay();
    var secondRequest = new RequsetWay();
    var threeRequest = new RequsetWay();
    var fourRequest = new RequsetWay();
    var lianzaiRequest = new RequsetWay();
    var zhuanTiRequest = new RequsetWay();
    var bodySlid = new RequsetWay();
    // 轮播图数据请求开始
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $('.swiper-wrapper').html(template('template_1', data));
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: 2000,
            })
        }
    })
    // 轮播图数据请求结束
    firstRequset.firstRequest();

    $('#content').on('click', 'li', function () {
        $('#content .tab li').removeClass('active');
    })

    $('#content').on('click', '.one', function () {
        $(this).addClass('active');
        firstRequset.firstRequest();
    })

    $('#content').on('click', '.tow', function () {
        $(this).addClass('active');
        secondRequest.secondRequest();
    })

    $('#content').on('click', '.three', function () {
        $(this).addClass('active');
        threeRequest.threeRequest();
    })

    $('#content').on('click', '.four', function () {
        $(this).addClass('active');
        fourRequest.fourRequest();
    })

    // =============================================================

    $('#list').on('click', 'li:nth-of-type(1)', function () {
        bodySlid.bodySlid();
        lianzaiRequest.lianzaiRequest();
    })

    $('#list').on('click', 'li:nth-of-type(2)', function () {
        bodySlid.bodySlid();
        zhuanTiRequest.zhuanTiRequest();
    })

    $('.lianZai .back').on('click', function () {
        setTimeout(function () {
            $('#doc-oc-demo3').removeClass('am-active');
        }, 200);
        $('.lianZai .content').removeClass('am-offcanvas-bar-active')
    })

    $('.zhuanTi .back').on('click', function () {
        setTimeout(function () {
            $('#doc-oc-demo4').removeClass('am-active');
        }, 200);
        $('.zhuanTi .content').removeClass('am-offcanvas-bar-active')
    })
})