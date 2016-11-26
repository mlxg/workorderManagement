<template>
        <div>
            <select v-model="province_index">
                <option v-for="(item,index) in addressList" :value="index">{{item.name}}</option>
            </select>
            <select v-model="city">
                <option v-for="item in cityList" :value="item.name">{{item.name}}</option>
            </select>
        </div>
</template>
<style>

</style>
<script>
    export default{
        props: ['name', 'value'],
        data () {
            return {
                province: '省',
                city: '市',
                province_index: 0,
                addressList: [],
                cityList: [],
                values: []
            }
        },
        components: {
        },
        watch: {
            province_index: function (val, oldVal) {
                this.cityList = this.addressList[val].city
                this.province = this.addressList[val].name
                this.city = this.cityList[0].name
            }
        },
        methods: {
            getProvince () {
                return this.province
            },
            getCity () {
                return this.city
            }
        },
        mounted: function () {
            console.log('加载地址-------')
            this.names = this.name.split('-')
            this.values = this.value.split('-')
            this.$http.get('/data/Address.json')
            .then(function (response) {
                this.addressList = response.data
                if (this.values.length > 0) {
                    console.log(this.values)
                    for (var i = 0; i < this.addressList.length; i++) {
                        console.log(this.addressList[i])
                        if (this.values[0] === this.addressList[i].name) {
                            this.province_index = i
                        }
                    }
                } else {
                    this.cityList = this.addressList[0].city
                }
            })
            .catch(function (response) {
                console.log(response)
            })
            console.log('props=' + this.name)
        }
    }

</script>
