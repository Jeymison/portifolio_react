import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil,
      iusto tenetur numquam architecto nesciunt eius error fugiat explicabo
      incidunt itaque non blanditiis? Magnam earum, molestiae impedit omnis
      doloremque mollitia.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Jeymison&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jeymison&layout=compact&langs_count=78&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
