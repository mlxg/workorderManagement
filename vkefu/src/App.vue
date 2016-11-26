<template>
    <div id="app" class="container-fluid">

        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <div class="logo">客服工单管理系统</div>
                    </a>

                </div>
                <div class="logout pull-right">退出</div>
            </div>
        </nav>

        <div class="kf-main row">

            <div class="kf-left leftpanellist col-md-2">
                <menus></menus>
            </div>

            <div class="kf-right rightpanel col-md-10">

                <router-view></router-view>

            </div>

        </div>

        <div class="kf-footer">
            <div class="copyright">
                Copyright © 2011-2016 SegmentFault. 当前呈现版本 16.11.16<br>
                <a href="http://www.miibeian.gov.cn/" rel="nofollow">浙ICP备 15005796号-2</a> &nbsp;
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602002000"
                   rel="nofollow">浙公网安备 33010602002000号</a>
            </div>
        </div>
    </div>
</template>
<style>
    @import "assets/style/common.css";
    @import "assets/style/backstage.css";

    .logo {
        margin-left: 16px;
        height: 56px;
        float: left;
        color: #fafafa;
        letter-spacing: 0;
        font-size: 30pt;
        text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
    }

    .logout {
        float: right;
        margin: 15px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: #f9f9f9;
    }

    .kf-left {
        min-height: 600px;
        height: 100%;
    }

    .kf-right {
    }

    .kf-footer {
        text-align: center;
        font-size: 13px;
    }
</style>
<script>
    import menus from './components/Menus.vue'
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            menus
        }
    }
</script>
