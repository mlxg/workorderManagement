/*
 * Created by cailq on 2016/11/16.
 **/

// DOM Ready ==================================================
$(document).ready(function () {
    timePicker();
    listShow();
    tabPanel();
    checkOrder();
});

/*
 * 页签切换
 * */
function tabPanel() {
    $(".nav_tab ul li").click(function (event) {
        $(this).addClass("current_active").siblings().removeClass("current_active");
        $(".nav_banner > div:eq(" + $(this).index() + ")").show().siblings(".nav_banner > div").hide();
    });
}

/*
 * 日期选择
 * */
function timePicker() {
    $('.g_data').on('click', function () {
        SelectDate(this, 'yyyy-MM-dd');
    })
}

/*
 * 显示详情，支持复制
 * */
function listShow() {
    $('.tooltip').each(function () {
        var that = $(this);
        var g_show = that.find('span').text();

        new jBox('Tooltip', {
            attach: that,
            width: 280,
            closeOnMouseleave: true,
            animation: 'zoomIn',
            content: g_show
        });
    })
}

/*
 * 查询工单
 * */
function checkOrder() {
    $('.checkOrder').on('click', orderSearch);
    function orderSearch(event) {
        var $carNo = $('#carNo').val();
        var $createBy = $('#createBy').val();
        var $customerName = $('#customerName').val();
        var $followerName = $('#followerName').val();
        var $follower = $('#follower').val();
        var $type = $('#type').val();
        var $workOrderNo = $('#workOrderNo').val();
        var $startCreateDate = $('#startCreateDate').val();
        var $endCreateDate = $('#endCreateDate').val();
        var $salesman = $('#creatBy').val();
        var $salesManager = $('#salesManager').val();
        var $startFinishDate = $('#startFinishDate').val();
        var $status = $('#Status').val();
        var $businessDepatmentId = $("#businessDepatmentId").val();


        var newSearch = {
            "carNo": $carNo,
            "createBy.name": $createBy,
            "customerName": $customerName,
            "follower.name": $followerName,
            "follower": $follower,
            "type": $type,
            "workOrderNo": $workOrderNo,
            "startCreateDate": $startCreateDate,
            "endCreateDate": $endCreateDate,
            "salesman.name": $salesman,
            "salesManager.name": $salesManager,
            "startFinishDate": $startFinishDate,
            "endFinishDate": $startFinishDate,
            "status": $status,
            "businessDepatmentId": $businessDepatmentId
        };

        $.ajax({
            contentType: 'application/json',
            url: 'http://192.168.1.211:8888/a/kefu/workOrder/list',
            data: JSON.stringify(newSearch),
            dataType: 'JSON',
            type: 'post',
            success: rsData()
        });

        function rsData(data) {
            var strHtml = '';
            var $rsData = $('#rsData').find('tbody');
            var $json = eval(data['model']['list']);

            $.each($json, function (index, value) {
                strHtml += '<tr>';
                strHtml += '<td>' + value.id + '</td>';
                strHtml += '<td>' + value.isNewRecord + '</td>';
                strHtml += '<td>' + value.customerName + '</td>';
                strHtml += '</tr>';
            });

            $rsData.html(strHtml);
        }

    }
}




