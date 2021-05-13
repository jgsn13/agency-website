import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faChartBar, faBell, faChartArea, faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram,faFacebookF, faTwitter, faLinkedin)
library.add(faPlay, faChartBar, faBell, faChartArea, faCoffee, faCheckCircle)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app")
