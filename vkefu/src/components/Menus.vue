<template>
    <ul>
        <li class="nav_parent" v-for="(menu, index) in menus">
            <a href="javascript:void(0)" class="active" @click="expand(index)">
                <i><img :src="menu.img" :alt="menu.title"></i>
                <span v-text="menu.text"></span>
            </a>
            <dl class="nav_children" :class="{'showed': menu.show}" v-for="child in menu.childs">
                <dd @click="render(child.type)">
                    <router-link :to="child.href" tag="a" :class="{'current': child.current}">
                        <i></i>
                        <span v-text="child.text"></span>
                    </router-link>
                </dd>
            </dl>
        </li>
    </ul>
</template>

<script type="text/javascript">
    export default {
        props: [],
        data () {
            return {
                status: {
                    currMenu: 0
                },
                menus: [
                    {
                        id: 1,
                        title: '工单管理',
                        img: './assets/images/analyse_1.png',
                        text: '工单管理',
                        show: true,
                        childs: [
                            {
                                href: '/workOrder',
                                class: '',
                                url: '',
                                target: '',
                                text: '工单列表管理',
                                title: '工单列表管理',
                                current: true,
                                type: 'list'
                            }, {
                                href: '/custom',
                                class: '',
                                url: '',
                                target: '',
                                text: '客户查询',
                                title: '客户查询',
                                current: false,
                                type: 'form'
                            }]
                    }, {
                        id: 2,
                        title: '呼入呼出管理',
                        img: './assets/images/check_2.png',
                        text: '呼入呼出管理',
                        show: false,
                        childs: [{
                            href: '/contactRecordList',
                            class: '',
                            url: '',
                            target: '',
                            text: '呼入呼出记录管理',
                            title: '呼入呼出记录管理',
                            current: false,
                            type: 'form'
                        }]
                    }, {
                        id: 3,
                        title: '业务统计',
                        img: './assets/images/manage_2.png',
                        text: '业务统计',
                        show: false,
                        childs: [{
                            href: '/workOrderAggrList',
                            class: '',
                            url: '',
                            target: '',
                            text: '工单业务统计',
                            title: '工单业务统计',
                            current: false,
                            type: 'form'
                        }]
                    }
                ]
            }
        },
        methods: {
            expand (idx) {
                this.menus[this.status.currMenu].show = false
                this.status.currMenu = idx
                this.menus[idx].show = true
                this.menus[idx].childs[0].current = true
            },
            render (key) {

            }
        }
    }
</script>

<style scoped>
    .boot-select {
        float: right;
        width: 80px;
    }

    .boot-nav {
        float: right;
    }

    .boot-page {
        display: inline-block;
        margin: 2px 10px 0 20px;
        vertical-align: middle;
    }

    .page-total {
        display: inline-block;
        vertical-align: middle;
    }
</style>
