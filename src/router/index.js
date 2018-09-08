import Vue from 'vue'
import Router from 'vue-router'

// 导入对应对应的路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarCpntainer from '../components/tabbar/ShopcarCpntainer.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: HomeContainer
    }, {
        path: '/member',
        component: MemberContainer
    }, {
        path: '/shopcar',
        component: SearchContainer
    }, {
        path: '/search',
        component: ShopcarCpntainer
    }, ],
    linkActiveClass: 'mui-active'
})