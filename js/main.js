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
    $('.checkBtn').on('click', orderSearch);
    function orderSearch() {
        var $carNo = $('.carNo').val();
        var $createBy = $('.createBy').val();
        var $customerName = $('.customerName').val();
        var $followerName = $('.followerName').val();
        var $follower = $('.follower').val();
        var $type = $('.type').val();
        var $workOrderNo = $('.workOrderNo').val();
        var $startCreateDate = $('.startCreateDate').val();
        var $endCreateDate = $('.endCreateDate').val();
        var $salesman = $('.salesman').val();
        var $salesManager = $('.salesManager').val();
        var $startFinishDate = $('.startFinishDate').val();
        var $status = $('.Status').val();
        var $businessDepatmentId = $('.businessDepatmentId').val();


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
            url: 'http://localhost:8888/a/kefu/workOrder/list',
            data: JSON.stringify(newSearch),
            dataType: 'JSON',
            type: 'post',
            success: rsData()
        });

        function rsData(data) {
            var strHtml = '';
            var $rsData = $('.rsData').find('tbody');
            // var $json = eval(data['model']['list']);

            $.each(data.model.list, function (index, value) {

                alert(value.workOrderNo);
                /*strHtml += '<tr>';
                strHtml += '<td>' + value.workOrderNo + '</td>';
                strHtml += '<td>' + value.type + '</td>';
                strHtml += '<td>' + value.problemType + '</td>';
                strHtml += '<td>' + value.source + '</td>';
                strHtml += '<td>' + value.customerName + '</td>';
                strHtml += '<td>' + value.mobile + '</td>';
                strHtml += '<td>' + value.carNo + '</td>';
                strHtml += '<td>' + value.salesman + '</td>';
                strHtml += '<td>' + value.salesManager + '</td>';
                strHtml += '<td>' + value.createBy + '</td>';
                strHtml += '<td>' + value.createData + '</td>';
                strHtml += '<td>' + value.follower + '</td>';
                strHtml += '<td>' + value.question + '</td>';
                strHtml += '<td>' + value.question + '</td>';
                strHtml += '</tr>';*/

            });

            $rsData.html(strHtml);
        }

    }
}




