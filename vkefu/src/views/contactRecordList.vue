<template>

    <div class="headerbar">
        <filters v-bind:ViewRule="rules" ref="forms"></filters>

        <div class="btn_bar">
            <button class="query_btn" v-on:click="query()">查询</button>
            <button class="reset_btn" v-on:click="reset()">重置</button>
        </div>
        <vtable v-bind:options="table" ref="tables"></vtable>
        <div v-on:click="view(1111)">xxx</div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>

                    <div class="modal-body" >
                        {{ msg }}
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
                msg: 'sss',
                rules: [
                    {label: '客户姓名', type: 'input', name: 'chauffeurName', maxlength: 30, value: ''},
                    {label: '客户电话', type: 'input', name: 'mobilePhone', maxlength: 30, value: ''},
                    {
                        label: '工单类型',
                        type: 'select',
                        name: 'workOrderType',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {
                        label: '问题类型',
                        type: 'select',
                        name: 'problemType',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {label: '车牌号码', type: 'input', name: 'carNo', maxlength: 30, value: ''},
                    {
                        label: '电话类型',
                        type: 'select',
                        name: 'callType',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {label: '创建人', type: 'input', name: 'createBy', maxlength: 30, value: ''},
                    {label: '创建时间', type: 'date', name: 'createDateStart', maxlength: 30, value: ''},
                    {label: '_', type: 'date', name: 'createDateEnd', maxlength: 30, value: ''},
                    {label: '销售人员', type: 'input', name: 'salesman', maxlength: 30, value: ''},
                    {label: '销售经理', type: 'input', name: 'salesManager', maxlength: 30, value: ''},
                    {label: '通话时间', type: 'date', name: 'callTimeStart', maxlength: 30, value: ''},
                    {label: '_', type: 'date', name: 'callTimeEnd', maxlength: 30, value: ''},
                    {label: '地址', type: 'address', name: 'province-city', value: '湖南-长沙'}
                ],
                table: {
                    id: 'idxTable',
                    config: {
                        url: '/data/contactRecord_list.json',
                        columns: [{
                            field: '',
                            title: '序号',
                            formatter: function (value, row, index) {
                                return index + 1
                            }
                        },
                        {
                            field: 'callType',
                            title: '电话类型'
                        },
                        {
                            field: 'chauffeurName',
                            title: '客户姓名'
                        }, {
                            field: 'mobilePhone',
                            title: '客户电话'
                        }, {
                            field: 'carNo',
                            title: '车牌号码'
                        }, {
                            field: 'salesman',
                            title: '销售人员'
                        }, {
                            field: 'salesManager',
                            title: '销售经理'
                        }, {
                            field: 'orderType',
                            title: '工单类型'
                        }, {
                            field: 'problemType',
                            title: '问题类型'
                        }, {
                            field: 'createBy',
                            title: '创建人'
                        }, {
                            field: 'createDate',
                            title: '创建时间'
                        }, {
                            field: 'callTime',
                            title: '通话时间'
                        }, {
                            field: 'question',
                            title: '客户问题'
                        }, {
                            field: 'content',
                            title: '客服回复'
                        }, {
                            field: '',
                            title: '操作',
                            that: this,
                            formatter: function (value, row, index) {
                                var vm = this.that
                                vm.msg = 'sb'
                                return '<button class="btn btn-primary" data-toggle="modal"  v-on:click="view(1111)" data-target="#myModal">查看</button>'
                            }
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
            },
            view (index) {
                console.log(this)
                console.log(index)
            }
        },
        components: {
            filters, vtable
        },
        mounted: function () {
            console.log('hi index has mounted')
            console.log('-------')
            console.log(this)
        }
    }
</script>
