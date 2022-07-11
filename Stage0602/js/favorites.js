/* classe que vai conter a logica dos dados
  como os dados serão estruturados
  classe que vai criar a visualização e eventos do html
*/

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.update()
  }
  
  update() {
    this.removeAllTr()
    const entradas = [
      {
        login: 'renyzeraa',
        name: "Renan Silva",
        public_repos: '77',
        followers: '1169110'
       },
      {
        login: 'mullerhub',
        name: "murilo muller",
        public_repos: '17',
        followers: '11069110'
      }
  ]
  entradas.forEach( user => {
    console.log(user)
  })

  }

    createRow() {
      const tr = document.createElement('tr')
      const conteudoHTML = `
      
        <td class="user">
            <img src="https://github.com/mullerhub.png" alt="">
            <a href="https://github.com/MullerHub" target="_blank">
              <p>murilin</p>
              <span>MullerHub</span>
            </a>
        </td>
        <td class="repositories">07 repositorios</td>
        <td class="followers">878 seguimores</td>
        <td><button class="remove">&times;</button></td>
      </tr>
    `

    tr.innerHTML = conteudoHTML

    return tr
    }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')
    tbody.querySelectorAll('tbody tr')
    .forEach((tr) => {
        tr.remove()
    })
  }
}



















