import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lenis from '@studio-freight/lenis'



const app = createApp(App)

app.use(router)

app.mount('#app')



const lenis = new Lenis()

lenis.on('scroll', (e) => {
	console.log(e)
})

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
