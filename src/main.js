import { createApp } from 'vue'
import App from '@/App.vue'
// import axios from 'axios'
import components from '@/components/UI/';
import {router} from '@/router'
import store from '@/store'

const app = createApp(App)
//register UI library
components.forEach( component =>{
    app.component(component.name, component)
})

app
.use(store)
.use(router)
.mount('#app')
