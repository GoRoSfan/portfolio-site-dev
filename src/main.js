import Vue from 'vue'
import App from './App.vue'

let globalData = new Vue({
    data: { $lang: 'ru' }
});
Vue.mixin({
    computed: {
        $lang: {
            get: function () { return globalData.$data.$lang },
            set: function (newLang) { globalData.$data.$lang = newLang; }
        }
    }
})

Vue.filter('translateElement', function (element, lang) {
    let translate_file = require('@/languages/' + lang + '.json')
    return translate_file[element]
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
