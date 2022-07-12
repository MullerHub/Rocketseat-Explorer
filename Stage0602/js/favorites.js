/* classe que vai conter a logica dos dados
  como os dados serão estruturados
  classe que vai criar a visualização e eventos do html
*/

import { GithubUser } from './GithubUser.js'

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entradas = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entradas))
  }

  async add(username) {
    try {
      const userExists = this.entradas.find(entry => entry.login === username)

      if (userExists) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)
      if (user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entradas = [user, ...this.entradas]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    const entradasFiltradas = this.entradas.filter(
      entry => entry.login !== user.login
    )

    this.entradas = entradasFiltradas
    this.update()
    this.save()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entradas.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `
      https://github.com/${user.login}.png`

      row.querySelector('.user img').src = `https.github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagenação de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('tem certeza que deseja deletar esse user?')
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.conteudoHTML = `
      <td class="user">
      <img src="https://github.com/mullerhub.png" alt="imagem de murilin">
      <a href="https://github.com/MullerHub" target="_blank">
      <p>murilin</p>
      <span>MullerHub</span>
      </a>
      </td>
      <td class="repositories">07</td>
      <td class="followers">999</td>
      <td><button class="remove">&times;</button></td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
