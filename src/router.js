import Vue from 'vue'
import Router from 'vue-router'
import Address from './assets/pages/address'
import Cart from './assets/pages/cart'

Vue.use(Router);

export default new Router({
    routes:[
        {
        path:'/',
        name:"cart",
        component:Cart
        },
        {
            path:'/address',
            name:"address",
            component:Address
            }
        
    ]
})