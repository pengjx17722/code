// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './api/axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(router);
Vue.prototype.$axios = Axios;
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
