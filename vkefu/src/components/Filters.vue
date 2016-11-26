<template>
    <ul>
        <li v-for="(view, index) in ViewRule">
            <label v-text="view.label"></label>
            <div v-if="view.type == 'select'">
                <select v-model="view.value">
                    <option value="">---请选择---</option>
                    <option v-for="item in view.data" :value="item.val">{{item.text}}</option>
                </select>
            </div>
            <div v-if="view.type == 'input'">
                <input type="text" :maxlength="view.maxlength" v-model="view.value">
            </div>
            <Flatpickr v-if="view.type == 'date'" :message="chooseMessage" @update='update'
                       :options="{'index': index,enableTime: true,enableSeconds: true,dateFormat: 'Y-m-d H:i:S'}"/>

            <addressList v-if="view.type == 'address'" :name="view.name" :value="view.value"></addressList>

            <!--<multiselect v-if="view.type == 'multsel'"-->
            <!--:selected="selected"-->
            <!--:options="options"-->
            <!--@update="updateSelected">-->
            <!--</multiselect>-->
            <!--<Multiselect v-if="view.type == 'multsel'" :value="selected" :options="options"></Multiselect>-->
            <select v-if="view.type == 'multsel'" :id="view.name" multiple="multiple">
                <option v-for="item in view.data" :value="item.val">{{item.text}}</option>
            </select>
        </li>

    </ul>
</template>

<script type="text/javascript">
    import Flatpickr from '../../node_modules/vue-flatpickr/vue-flatpickr-default.vue'
    import addressList from '../components/Address.vue'
    import $ from 'jquery'
    export default {
        props: ['ViewRule'],
        data () {
            return {
                chooseMessage: '请选择日期',
                selected: null,
                options: ['list', 'of', 'options']
            }
        },
        methods: {
            parameter () {
                var data = {}
                for (var item in this.ViewRule) {
                    var rule = this.ViewRule[item]
                    data[rule.name] = rule.value
                }
                return data
            },
            reset () {
                for (var item in this.ViewRule) {
                    this.ViewRule[item].value = ''
                }
            },
            update (val, idx) {
                this.ViewRule[idx].value = val
            },
            updateSelected (newSelected) {
                this.selected = newSelected
            }
        },
        components: {
            Flatpickr, addressList
        },
        mounted: function () {
            for (var item in this.ViewRule) {
                var rule = this.ViewRule[item]
                if (rule.type === 'multsel') {
                    $('#' + rule.name).multiselect()
                }
            }
        }
    }
</script>

<style>
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

    .multiselect-container {
        position: absolute;
        list-style-type: none;
        margin: 0;
        padding: 0
    }

    .multiselect-container .input-group {
        margin: 5px
    }

    .multiselect-container > li {
        padding: 0
    }

    .multiselect-container > li > a.multiselect-all label {
        font-weight: 700
    }

    .multiselect-container > li.multiselect-group label {
        margin: 0;
        padding: 3px 20px 3px 20px;
        height: 100%;
        font-weight: 700
    }

    .multiselect-container > li.multiselect-group-clickable label {
        cursor: pointer
    }

    .multiselect-container > li > a {
        padding: 0
    }

    .multiselect-container > li > a > label {
        margin: 0;
        height: 100%;
        cursor: pointer;
        font-weight: 400;
        padding: 3px 20px 3px 40px
    }

    .multiselect-container > li > a > label.radio, .multiselect-container > li > a > label.checkbox {
        margin: 0
    }

    .multiselect-container > li > a > label > input[type=checkbox] {
        margin-bottom: 5px
    }

    .btn-group > .btn-group:nth-child(2) > .multiselect.btn {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px
    }

    .form-inline .multiselect-container label.checkbox, .form-inline .multiselect-container label.radio {
        padding: 3px 20px 3px 40px
    }

    .form-inline .multiselect-container li a label.checkbox input[type=checkbox], .form-inline .multiselect-container li a label.radio input[type=radio] {
        margin-left: -20px;
        margin-right: 0
    }
</style>
