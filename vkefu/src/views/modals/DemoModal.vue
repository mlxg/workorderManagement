<template>
    <div :class="{'modal':true,'fade': true,'hide':hide}" :id="options.id" tabindex="-1" role="dialog"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span
                            aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">{{options.title}}</h4>
                </div>
                <div class="modal-body">
                    这里面是个性化的内容能做数据绑定么？{{data.author}}{{data.num}}
                    <input style="border: solid 1px red;" type="text" v-model="remark">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"> 取 消</button>
                    <button type="button" class="btn btn-primary" v-on:click="save()"> 确 认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props: ['options'],
        data () {
            return {
                data: {
                    author: '',
                    num: 1
                },
                remark: '',
                hide: false,
                modal: null
            }
        },
        methods: {
            show (data, mod) {
                this.data = data
                this.modal = mod
                this.modal.modal('show')
            },
            save () {
                // 发送$http
                console.log('数据已经拿到了' + this.remark)
                this.modal.modal('hide')
            }
        },
        components: {}
    }
</script>
