import Vue from 'vue'
import Router from 'vue-router'
import myPage from '../components/pages/mypage.vue'
import Experience from '../components/pages/experience.vue'
import Blog from '../components/pages/blog.vue'
import Journal from '../components/pages/journal.vue'
import Register from '../components/pages/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myPage',
      component: myPage
    },
    {
      path:'/experience',
      name:'Experience',
      component:Experience
    },
    {
      path:'/blog',
      name:'Blog',
      component:Blog
    }, 
    {
      path:'/journal',
      name:'Journal',
      component:Journal
    },
  ]
})
