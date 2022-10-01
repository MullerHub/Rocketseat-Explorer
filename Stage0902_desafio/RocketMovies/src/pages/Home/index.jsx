import { Container, Teste } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiMail } from 'react-icons/fi'
import { SectionMovies } from '../../components/SectionMovies'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Button icon={FiMail} title="Adicionar filme" />
      </div>

      <SectionMovies title="A loucademia de policiais 2022" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo voluptas explicabo quod, mollitia numquam officiis veniam necessitatibus laudantium consequuntur aut officia sequi esse dignissimos modi! Rem voluptate a excepturi.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Ducimus delectus placeat repudiandae repellat eligendi maiores temporibus quasi reiciendis quo! Veritatis temporibus magnam dolor minima, itaque aliquid? Vitae, in asperiores iusto consequuntur a perspiciatis! Mollitia, molestiae odio. Mollitia, inciduntis veniam necessitatibus laudantium consequuntur aut officia sequi esse dignissimos modi! Rem voluptate a excepturi.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Ducimus delectus placeat repudiandae repellat eligendi maiores temporibus quasi reiciendis quo! Veritatis temporibus magnam dolor minima, itaque aliquid? Vitae, in asperiores iusto consequuntur a perspiciatis! Mollitia, molestiae odio. Mollitia, inciduntis veniam necessitatibus laudantium consequuntur aut officia sequi esse dignissimos modi! Rem voluptate a excepturi.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Ducimus delectus placeat repudiandae repellat eligendi maiores temporibus quasi reiciendis quo! Veritatis temporibus magnam dolor minima, itaque aliquid? Vitae, in asperiores iusto consequuntur a perspiciatis! Mollitia, molestiae odio. Mollitia, inciduntis veniam necessitatibus laudantium consequuntur aut officia sequi esse dignissimos modi! Rem voluptate a excepturi.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Ducimus delectus placeat repudiandae repellat eligendi maiores temporibus quasi reiciendis quo! Veritatis temporibus magnam dolor minima, itaque aliquid? Vitae, in asperiores iusto consequuntur a perspiciatis! Mollitia, molestiae odio. Mollitia, inciduntis veniam necessitatibus laudantium consequuntur aut officia sequi esse dignissimos modi! Rem voluptate a excepturi.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Obcaecati eius voluptate impedit est laudantium quasi provident eveniet dolor culpa a nam cumque blanditiis, mollitia sequi delectus iure in nihil sapiente veritatis corporis incidunt. Suscipit ex vero provident dicta.
      Ducimus delectus placeat repudiandae repellat eligendi maiores temporibus quasi reiciendis quo! Veritatis temporibus magnam dolor minima, itaque aliquid? Vitae, in asperiores iusto consequuntur a perspiciatis! Mollitia, molestiae odio. Mollitia, incidunt."  >
        {console.log("section entrou")}
      </SectionMovies>


    </Container>
  )
}