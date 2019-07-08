export default [{
    path: '/',
    name: 'Main',
    component: () =>
        import ("@/containers/main")
        // redirect: '/index'
}, {
    //tab切换 better-scroll
    path: '/index',
    name: 'Index',
    component: () =>
        import ("@/containers/index")
}, {
    path: '/shopcar',
    name: 'ShopCar',
    component: () =>
        import ("@/containers/shopCar")
}, {
    path: '/login',
    name: 'Login',
    component: () =>
        import ("@/containers/login")
}, {
    path: '/two',
    name: 'Two',
    component: () =>
        import ("@/containers/two")
}]