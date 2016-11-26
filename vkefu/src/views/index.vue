<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="headerbar">
        <filters v-bind:ViewRule="rules" ref="forms"></filters>

        <div class="btn_bar">
            <button class="query_btn" v-on:click="query()">查询</button>
            <button class="reset_btn" v-on:click="reset()">重置</button>
        </div>

        <vtable v-bind:options="table" ref="tables"></vtable>

        <vmodal v-bind:options="modal" ref="viewModal"></vmodal>
    </div>
</template>
<style>
</style>
<script>
    import filters from '../components/Filters.vue'
    import vtable from '../components/Tables.vue'
    import vmodal from './modals/DemoModal.vue'
    import $ from 'jquery'
    export default{
        data () {
            return {
                rules: [
                    {
                        label: '订单类型',
                        name: 'type',
                        type: 'select',
                        data: [{val: 1, text: '业务订单'}, {val: 2, text: '库存订单'}],
                        value: ''
                    },
                    {
                        label: '订单状态',
                        type: 'select',
                        name: 'status',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {label: '申请人', type: 'input', name: 'apply', maxlength: 30, value: ''},
                    {label: '申请人', type: 'input', name: 'sale', maxlength: 30, value: ''},
                    {label: '申请人', type: 'input', name: 'manager', maxlength: 30, value: ''},
                    {
                        label: '订单状态',
                        type: 'multsel',
                        name: 'statusv2',
                        data: [{val: 1, text: '全部'}, {val: 2, text: '在办'}, {val: 3, text: '办毕'}],
                        value: ''
                    },
                    {label: '申请部门', type: 'input', name: 'dept', maxlength: 30, value: ''}
                ],
                table: {
                    id: 'idxTable',
                    config: {
                        that: this,
                        url: '/data/table.json',
                        columns: [{
                            field: 'num',
                            title: '序号',
                            formatter: function (value, row) {
                                return [row.num, row.num].join(' ')
                            }
                        }, {
                            field: 'author',
                            title: '作者',
                            formatter: function (value, row) {
                                return [row.num, row.author].join('+')
                            }
                        }, {
                            field: 'num',
                            title: '作者',
                            formatter: function (value, row, index) {
                                return '<button class="btn btn-primary shview" data-index="' + index + '">查看</button>'
                            }
                        }],
                        onLoadSuccess: function () {
                            console.log('onLoadSuccess')
                            var vm = this.that
                            var data = {vm: vm}
                            $('.shview').click(data, function (e) {
                                var index = $(this).attr('data-index')
                                var vm = e.data.vm
                                vm.$refs.viewModal.show(vm.$refs.tables.getData(index), $('#myModal'))
                            })
                        }
                    }
                },
                modal: {
                    id: 'myModal',
                    title: '这是标题',
                    effect: 'fade',
                    width: 300
                }
            }
        },
        methods: {
            query () {
                this.$refs.tables.render('refresh', this.$refs.forms.parameter())
            },
            reset () {
                this.$refs.forms.reset()
                this.$refs.tables.reset()
            }
        },
        components: {
            filters, vtable, vmodal
        },
        mounted: function () {
            console.log('hi index has mounted')
        }
    }
</script>
