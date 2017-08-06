/**
 * Created by QYH on 2017/7/5.
 */

$(function(){
    //初始化工具提示插件
    $('[data-toggle="tooltip"]').tooltip();

    /*获取wjs_product模块的导航栏*/
    var wjs_productUl = $(".wjs_product").find(".nav-product");
    /*获取wjs_product模块的导航栏所有的li*/
    var wjs_productLis = wjs_productUl.children("li");

    //检测窗口的改变
    $(window).on("resize",function(){
        //获取屏幕的宽度
        var windowWidth = $(window).width();
        /*console.log(windowWidth);*/

        var carouselImgs = $(".carousel-inner").children("div");
        /*当屏幕宽度小于768时加载小图片*/
        if(windowWidth<=768){

            carouselImgs.each(function(){

                var imgSrc = $(this).data('small-image');
                console.log(imgSrc);
                $(this).html('<img src="'+imgSrc+'" alt=""/>');
            });
        /*当屏幕宽度大于768时加载大图片*/
        }else if(windowWidth>768){
            carouselImgs.each(function(){

                var largeImgSrc = $(this).data('large-image');
                console.log(largeImgSrc);
                $(this).html('<div class="imgbox"></div>');
                $(this).find(".imgbox").css("background","url("+ largeImgSrc+") no-repeat center/cover")
            });
        }





        var wjs_productLiWidth = 0;
        /*屏幕改变后重新设置导航栏的宽度*/
        wjs_productLis.each(function(index,value){
            wjs_productLiWidth +=$(this).outerWidth(true);
        });
       /* console.log(wjs_productLiWidth);*/
       /* 屏幕宽度改变后重新设置wjs_product模块导航栏的宽度*/
        wjs_productUl.css("width",wjs_productLiWidth+"px");
        //屏幕改变后初始化iscroll插件
        var myScroll = new IScroll('.product-wrap',{
            scrollX: true, scrollY: false,
            preventDefault:false,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ }
        });
    }).trigger("resize");


   /*轮播图滑动操作 */

    var startX=0;
    var startY=0;

    var wjs_banner = $(".wjs_banner")[0];

    console.log(wjs_banner);

    wjs_banner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
        console.log(startX);
    });

    wjs_banner.addEventListener("touchend",function(e){
       startY = e.changedTouches[0].clientX;
        console.log(startY);

        if(startX>startY){

            $('.carousel').carousel('next');
        }else if(startX<startY){
            $('.carousel').carousel('prev');
        }
    });


})
