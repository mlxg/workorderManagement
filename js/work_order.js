//js document
$(document).ready(function () {
    "use strict";
    screenSize();
    $(window).resize(function () {
        screenSize();
    });
    // queryForm();
    //左侧一级导航栏hover
    $(".leftpanellist ul > li > a").hover(function () {
        //var index = $(this).parent("li").index();
        //highlight(index);
    });
    //二级导航栏hover
    $(".nav_children dd > a").hover(function () {

    });
    //点击一级导航栏显示
    $(".leftpanellist ul > li > a").click(function () {
        var index = $(this).parent("li").index();
        highlight(index);
        $(this).addClass("active");
        $(this).parent("li").siblings("li").children("a").removeClass("active");
        $(this).siblings(".nav_children").slideToggle();
        $(this).parent("li").siblings("li").children("dl").slideUp();
    });
    //点击二级菜单
    $(".nav_children > dd").click(function () {
        /*var that = $(this);
         that.children("a").addClass("current");
         that.siblings().children("a").removeClass("current");
         that.parent().parent().siblings("li").find("dl dd").children("a").removeClass("current");
         that.children("a").children("i").css({"background":"url(./images/arrows_1.png) no-repeat center center","background-size":"100% 100%"});
         that.siblings().children("a").children("i").css({"background":"url(./images/arrows.png) no-repeat center center","background-size":"100% 100%"});
         that.parent().parent().siblings("li").find("dl dd").children("a").children("i").css({"background":"url(images/arrows.png) no-repeat center center","background-size":"100% 100%"});
         //二级菜单切换
         if(that.children("a").attr("data-item") === 1){

         }else if(that.children("a").attr("data-item") === 2){

         }else if(that.children("a").attr("data-item") === 3){

         }*/
    });
    //表单重置
    $(".reset_btn").click(function () {
        $("#queryForm")[0].reset();
    });
    //点击查询
    $(".query_btn").click(function () {
        queryForm();
    });

    //指派任务
    $(".assign").click(function () {
        $(".workorder_lay").fadeIn();
    });
    //转业务
    $(".turn_the_business").click(function () {
        $(".business_lay").fadeIn();
    });
    //结案
    $(".close_out").click(function () {
        $(".close_out_lay").fadeIn();
    });

    //点击取消
    $(".go_back").click(function () {
        $(".approve_popup").fadeOut();
    });
    //点击关闭
    $(".closed_pup").click(function () {
        $(".approve_popup").fadeOut();
    });
    //tab切换
    $(".nav_switch ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".nav_list > div:eq(" + $(this).index() + ")").show().siblings(".nav_list > div").hide();
    });
    //表格隐藏显示
    $(".slide").click(function () {
        $(this).toggleClass("toggleClass");
        $(this).parent().parent().siblings(".data_table").slideToggle();
        //$(this).parent().parent().parent().siblings(".wrapper ul > li").find(".data_table").slideUp();
    });
});

//显示高亮图片和文本
function highlight(index) {
    "use strict";
    $(".leftpanellist ul > li").each(function () {
        var this_index = $(this).index();
        if (this_index === index) {
            var img = $(this).children('a').children("i").children('img');
            var src = img.attr('src').replace('_2', '_1');
            img.attr('src', src);
        } else {
            var img = $(this).children('a').children("i").children('img');
            var src = img.attr('src').replace('_1', '_2');
            img.attr('src', src);
        }
    });
}
//获取窗口尺寸
function screenSize() {
    "use strict";
    //var w = $(window).width();
    var h = $(window).height();
    var headerbarH = $(".headerbar").outerHeight(true);
    $(".leftpanel,.rightpanel").css({"height": h});
    $(".contentbar").css({"height": h - headerbarH - 10, "max-height": h - headerbarH - 10});
}
//表单查询
function queryForm() {
    "use strict";
    var serializeForm = $("#queryForm").serializeArray();//系列化表单以键值对形式传给后台
    $.ajax({
        type: "POST",
        url: "http://o6zvblq1c.bkt.clouddn.com/data.json",
        data: serializeForm,//往后台传的参数
        dataType: "json",//返回的数据格式
        success: function (data) {
            //将json字符串解析为js对象
            //data = $.parseJSON(data);
            //先清空表体的内容
            $("#content").empty();
            var ele = $("#content");
            $.each(data, function (index, items) {
                //将数据显示在页面的指定元素中
                showData(ele, items);
            });
        },
        error: function () {
            //alert("请求失败，请稍后重试！");
        }
    });
}
//显示查询返回的数据
function showData(ele, items) {
    "use strict";
    var eleHtml = "<tr>" +
        "<td>" + items.level + "</td>" +
        "<td><a href='#'>" + items.title + "</a></td>" +
        "<td>" + items.date + "</td>" +
        "<td>" + items.department + "</td>" +
        "<td>" + items.person + "</td>" +
        "<td>" + items.status + "</td>" +
        "<td>" + items.transactor + "</td>" +
        "<td>" + items.timelimit + "</td>" +
        "<td class='operate'>" +
        "<span class='urge'>" + items.urge + "</span>" +
        "<span class='repeat'>" + items.repeat + "</span>" +
        "</td>" +
        "</tr>";
    ele.append(eleHtml);
}


























