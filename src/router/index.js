import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dash from '../views/Dash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/pay.vue')
  },
 
  {
    path:'/home',
    component: Home,
    children:[
      {
        path: 'notify',
        name: 'notify',
        component: () => import('../views/notify.vue')
      },
      {
        path: 'money',
        name: 'Money',
        component: () => import('../views/Money.vue')
      },
      {
        path: 'cancel',
        name: 'Cancel',
        component: () => import('../views/Cancel.vue')
      },
      {
        path: 'bill',
        name: 'Bill',
        component: () => import('../views/Bill.vue')
      },
      {
        path:'',
        name:'Dash',
        component:Dash,
        meta: {
          auth: true
        }
      },
      {
        path:'course',
        name:'Course',
        component:() => import('../views/Course.vue'),
        meta: {
          auth: true,
          keepAlive:true
        }
      },
      {
        path:'information',
        name:'Information',
        component:() => import('../views/Information.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'informationDetail/:id',
        name:'InformationDetail', 
        component:() => import('../views/InformationDetail.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'my',
        name:'My',
        component:() => import('../views/My.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'account',
        name:'Account',
        component:() => import('../views/Account.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'courseDetail/:id',
        name:'CourseDetail',
        component:() => import('../views/CourseDetail.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'teacherDetail/:id',
        name:'TeacherDetail',
        component:() => import('../views/TeacherDetail.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'info',
        name:'Info',
        component:() => import('../views/Info.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'vip',
        name:'Vip',
        component:() => import('../views/Vip.vue'),
        meta: {
          auth: true
        }
      },
      {
        path:'courseHistory',
        name:'CourseHistory',
        component:() => import('../views/CourseHistory.vue'),
        meta: {
          auth: true,
          keepAlive:true
        }
      },
      {
        path:'orderTeacher/:id',
        name:'OrderTeacher',
        component:() => import('../views/OrderTeacher.vue'),
        meta: {
          auth: true,
        }
      },
      {
        path:'teacherHistory',
        name:'TeacherHistory',
        component:() => import('../views/TeacherHistory.vue'),
        meta: {
          auth: true,
          keepAlive:true
        }
      },
      {
        path:'placeDetail/:id',
        name:'PlaceDetail',
        component:() => import('../views/PlaceDetail.vue'),
        meta: {
          auth: true,
        }
      },
      {
        path:'placeHistory',
        name:'PlaceHistory',
        component:() => import('../views/PlaceHistory.vue'),
        meta: {
          auth: true,
          keepAlive:true
        }
      },
      {
        path:'rate/:id',
        name:'Rate',
        component:() => import('../views/Rate.vue'),
        meta: {
          auth: true,
        }
      },
      {
        path:'alterPwd',
        name:'AlterPwd',
        component:() => import('../views/AlterPwd.vue'),
        meta: {
          auth: true,
        }
      },
      {
        path:'alterTel',
        name:'AlterTel',
        component:() => import('../views/AlterTel.vue'),
        meta: {
          auth: true,
        }
      },
      {
        path:'suggest',
        name:'Suggest',
        component:() => import('../views/Suggest.vue'),
        meta: {
          auth: true,
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// ??????????????????
// ?????????????????????????????????
router.beforeEach((to, from, next) => {
	next()
 /* // ?????? token??????????????????
  var token = sessionStorage.getItem("token")

  if(to.meta.auth) { // ????????????????????????
    if(token) { // ????????????????????????????????????
      next()
    } else {
      next({ // ??????????????????????????????
        path: "/login",
        query: {redirect: to.fullPath} // ??????????????????????????????
      })
    }
  } else {
    next() // ??????????????????
  } */
})

export default router
