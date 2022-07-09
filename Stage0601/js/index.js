import { Router } from './router'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/univese', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
