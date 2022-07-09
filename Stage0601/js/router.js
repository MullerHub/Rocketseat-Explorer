export class Router {
  routes = {}

  add(nameRoute, namePage) {
    this.routes[nameRoute] = namePage
  }
   routes(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href)
  
    this.handle()
  }
  
   handle() {
    const { pathname } = window.location
    const routes = this.routes[pathname] || this.routes[404]
    fetch(routes)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html 
    })
  }
}