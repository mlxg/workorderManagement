import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import vIndex from './views/index.vue'
import vCustomer from './views/customer.vue'
import contactRecordList from './views/contactRecordList.vue'
import vWorkOrder from './views/workOrder.vue'
import workOrderAggrList from './views/workOrderAggrList.vue'

Vue.config.debug = true
Vue.config.devtools = true

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hashbang: false,
    history: true,
    routes: [
        {
            path: '/',
            component: vIndex
        },
        {
            path: '/custom',
            component: vCustomer,
            children: []
        },
        {
            path: '/workOrder',
            component: vWorkOrder,
            children: []
        },
        {
            path: '/contactRecordList',
            component: contactRecordList,
            children: []
        },
        {
            path: '/workOrderAggrList',
            component: workOrderAggrList
        }
    ]
})

new Vue({
    router: router,
    render: h => h(App),
    beforeCreated: function () {
        console.log('beforeCreated')
    },
    created: function () {
        console.log('created')
    },
    mounted: function () {
        console.log('mounted')
    },
    updated: function () {
        console.log('updated')
    },
    destroyed: function () {
        console.log('destroyed')
    }
}).$mount('#app')
