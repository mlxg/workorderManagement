<template>
    <div class="kf-table">
        <table :id="options.id"></table>
    </div>
</template>
<style>
</style>
<script>
    import $ from 'jquery'
    export default{
        props: ['options'],
        data () {
            return {
                total: 0,
                rows: [],
                bootTable: null,
                customParams: {}
            }
        },
        methods: {
            getData (index) {
                return this.rows[index]
            },
            setCustomParams (params) {
                this.customParams = params
            },
            getCustomParams (params) {
                return $.extend(params, this.customParams)
            },
            getActionUrl () {
                return this.options.config.url
            },
            render (loadOrfresh, params) {
                if (typeof params !== 'object') params = {}
                if (typeof loadOrfresh !== 'string') loadOrfresh = 'refresh'
                this.setCustomParams(params)
                this.bootTable.bootstrapTable(loadOrfresh, {query: params, url: this.getActionUrl()})
            },
            reset () {
                this.customParams = {}
            }
        },
        components: {},
        mounted: function () {
            var that = this
            // console.log(this.$el)
            var opts = {
                id: '#' + this.options.id,
                method: 'get',
                pagination: true,
                sidePagination: 'server',
                pageSize: 10,
                undefinedText: '',
                pageList: [5, 10, 15, 20, 50],
                queryParamsType: 'limit',
                that: that,
                queryParams: function (params) {
                    return that.getCustomParams(params)
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                responseHandler: function (res) {
                    that.rows = res.rows
                    return res
                }
            }
            $.extend(opts, this.options.config)
            this.bootTable = $(opts.id)
            this.bootTable.bootstrapTable(opts)
        }
    }
</script>
