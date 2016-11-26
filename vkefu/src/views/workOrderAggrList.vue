<template>
    <div class="headerbar">
        <filters v-bind:ViewRule="rules" ref="forms"></filters>

        <div class="btn_bar">
            <button class="query_btn" v-on:click="query()">查询</button>
            <button class="reset_btn" v-on:click="reset()">重置</button>
        </div>

        <vtable v-bind:options="table" ref="tables"></vtable>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        ...............
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
</style>
<script>
    import filters from '../components/Filters.vue'
    import vtable from '../components/Tables.vue'
    export default{
        data () {
            return {
                rules: [
                    {label: '创建时间', type: 'date', name: 'createDateStart', value: ''},
                    {label: '-', type: 'date', name: 'createDateEnd', value: ''},
                    {
                        label: '工单状态',
                        type: 'select',
                        name: 'status',
                        data: [{val: 10, text: '待客服处理'}, {val: 20, text: '待业务处理'}, {val: 30, text: '待客服确认'}, {val: 40, text: '已结案'}],
                        value: ''
                    }
                ],
                table: {
                    id: 'idxTable',
                    config: {
                        url: '/data/workOrderAggr_list.json',
                        columns: [{
                            field: 'num',
                            title: '序号',
                            formatter: function (value, row, index) {
                                return index + 1
                            }
                        },
                        {
                            field: 'status',
                            title: '状态'
                        }, {
                            field: 'problemCP',
                            title: '产品套餐相关问题'
                        }, {
                            field: 'problemHT',
                            title: '合同套餐相关问题'
                        }, {
                            field: 'problemBX',
                            title: '保险理赔相关问题'
                        }, {
                            field: 'problemWX',
                            title: '车辆维修相关问题'
                        }, {
                            field: 'problemQZ',
                            title: '欠租催收收车相关问题'
                        }, {
                            field: 'problemWZ',
                            title: '违章处理相关问题'
                        }, {
                            field: 'problemQT',
                            title: '其他售后相关问题'
                        }, {
                            field: 'orderTS',
                            title: '投诉'
                        }, {
                            field: 'orderYJ',
                            title: '意见'
                        }, {
                            field: 'orderQT',
                            title: '其他'
                        }]
                    }
                },
                largeModal: false
            }
        },
        methods: {
            query () {
                console.log(this.$refs.forms.parameter())
            },
            reset () {
                this.$refs.forms.reset()
            }
        },
        components: {
            filters, vtable
        },
        mounted: function () {
            console.log('hi workOrderAggrList.vue has mounted')
        }
    }
</script>
