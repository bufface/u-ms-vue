import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  // eslint-disable-next-line
  bind( el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value
    let delay = 0
    if (binding.modifiers['delay']) {
      delay = 3000
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.background = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay);

  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
