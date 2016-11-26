<template>
    <div class="headerbar">
        <filters v-bind:ViewRule="rules" ref="forms"></filters>

        <div class="btn_bar">
            <button class="query_btn" @click="query()">查询</button>
            <button class="reset_btn" @click="reset()">重置</button>
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

        <div class="modal fade" id="trunModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="trunModalLabel">工单转交</h4>
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

        <div class="modal fade" id="finishModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="finishModalLabel">结案提示</h4>
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
                    {label: '工单编号', name: 'workOrderNo', type: 'input', maxlength: 30, value: ''},
                    {label: '客户名称', name: 'customerName', type: 'input', maxlength: 30, value: ''},
                    {label: '客户电话', name: 'mobile', type: 'input', maxlength: 30, value: ''},
                    {label: '创建人', name: 'createBy.name', type: 'input', maxlength: 30, value: ''},
                    {label: '跟进人', name: 'follower.name', type: 'input', maxlength: 30, value: ''},
                    {label: '车牌号', name: 'carNo', type: 'input', maxlength: 30, value: ''},
                    {
                        label: '工单类型',
                        name: 'type',
                        type: 'select',
                        data: [{val: 1, text: '业务订单'}, {val: 2, text: '库存订单'}],
                        value: ''
                    },
                    {
                        label: '问题类型',
                        type: 'select',
                        name: 'status',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {label: '创建时间', type: 'date', name: 'startCreateDate', maxlength: 30, value: ''},
                    {label: '-', type: 'date', name: 'endCreateDate', maxlength: 30, value: ''},
                    {label: '销售经理', type: 'input', name: 'salesManager.name', maxlength: 30, value: ''},
                    {label: '销售人员', type: 'input', name: 'salesman', maxlength: 30, value: ''}
                ],
                table: {
                    id: 'idxTable',
                    config: {
                        url: '/data/workOrderData.json',
                        that: this,
                        columns: [{
                            field: 'workOrderNo',
                            title: '工单编号',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'type',
                            title: '工单类型',
                            formatter: function (value, row) {
                                return row.workOrderType.name
                            }
                        }, {
                            field: 'problem',
                            title: '问题类型',
                            formatter: function (value, row) {
                                return row.problemType == null ? null : row.problemType.name
                            }
                        }, {
                            field: 'customerName',
                            title: '客户名称',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'mobile',
                            title: '客户电话',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'carNo',
                            title: '车牌号',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'salesman',
                            title: '销售人员',
                            formatter: function (value, row) {
                                return row.salesman == null ? null : row.salesman.name
                            }
                        }, {
                            field: 'salesManager',
                            title: '销售经理',
                            formatter: function (value, row) {
                                return row.salesManager == null ? null : row.salesManager.name
                            }
                        }, {
                            field: 'createUser',
                            title: '创建人',
                            formatter: function (value, row) {
                                return row.createUser == null ? null : row.createUser.name
                            }
                        }, {
                            field: 'createDate',
                            title: '创建时间',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'follower',
                            title: '跟进人',
                            formatter: function (value, row) {
                                return typeof row.follower === 'undefined' ? '' : row.follower.name
                            }
                        }, {
                            field: 'operate',
                            title: '操作',
                            formatter: function (value, row) {
                                var btns = '<a href="javascript:;" class="blue">查看</a>'
                                btns += ' <a href="javascript:;" class="blue">处理</a>'
                                btns += ' <a href="javascript:;" class="blue" data-toggle="modal" data-target="#myModal">指派</a>'
                                btns += ' <a href="javascript:;" class="blue" data-toggle="modal" data-target="#trunModal">转业务</a>'
                                btns += ' <a href="javascript:;" class="blue" data-toggle="modal" data-target="#finishModal">结案</a>'
                                return btns
                            }
                        }]
                    }
                },
                largeModal: false
            }
        },
        methods: {
            query () {
                this.$refs.tables.render('refresh', this.$refs.forms.parameter())
            },
            reset () {
                this.$refs.forms.reset()
            }
        },
        components: {
            filters, vtable
        },
        mounted: function () {
            console.log('hi index has mounted')
        }
    }

</script>
