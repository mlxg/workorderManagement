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
                       弹窗
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
                   {label: '客户名称', name: 'name', type: 'input', maxlength: 30, value: ''},
                   {label: '车牌号', name: 'carNo', type: 'input', maxlength: 30, value: ''},
                   {label: '手机电话', name: 'mobilePhone', type: 'input', maxlength: 30, value: ''},
                   {label: '销售人员', name: 'salesManName', type: 'input', maxlength: 30, value: ''},
                   {label: '城市', name: 'city', type: 'input', maxlength: 30, value: ''},
                   {label: '', name: 'carNo', type: 'input', maxlength: 30, value: ''}
                ],
                table: {
                    id: 'idxTable',
                    config: {
                        url: '/data/customDataList.json',
                        columns: [{
                            field: 'name',
                            title: '客户姓名',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'city',
                            title: '城市',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'mobilePhone',
                            title: '移动电话',
                            formatter: function (value, row) {
                                var mobilePhone2 = typeof row.mobilePhone2 === 'undefined' ? '' : row.mobilePhone2
                                return value + mobilePhone2
                            }
                        }, {
                            field: 'salesman.name',
                            title: '销售人员',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'salesManName',
                            title: '销售经理',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: '',
                            title: '业务类型',
                            formatter: function (value, row) {
                                return '汽车租赁'
                            }
                        }, {
                            field: 'applyNo',
                            title: '订单号',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: 'carNo',
                            title: '详情',
                            formatter: function (value, row) {
                                var a = typeof value === 'undefined' ? '' : value
                                return row.chauffeurApply.name + '<br/> ' + a
                            }
                        }, {
                            field: 'statusText',
                            title: '状态',
                            formatter: function (value, row) {
                                return value
                            }
                        }, {
                            field: '',
                            title: '操作',
                            formatter: function (value, row) {
                                return '<button class="btn btn-primary" data-toggle="modal" data-target="#myModal" v-on:click="showModal">查看客户列表</button><button class="btn btn-primary" data-toggle="modal" data-target="#myModal" v-on:click="showModal">创建工单</button>'
                            }
                        }]
                    }
                }
            }
        },
        components: {
            filters, vtable
        }
    }
</script>
