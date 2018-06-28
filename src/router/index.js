import Vue from 'vue'
import Router from 'vue-router'
import myPage from '../components/pages/mypage.vue'
import Project from '../components/pages/project.vue'
import Blog from '../components/pages/blog.vue'
import Journal from '../components/pages/journal.vue'
import blogContent from '../components/componet/blog-content'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'myPage',
      component: myPage
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [{
        path: ':id',
        component: blogContent,
      }]
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal
    },
  ]
})
