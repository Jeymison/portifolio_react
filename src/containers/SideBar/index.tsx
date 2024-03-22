import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { Descricao, ButtonTema, SideBarContainer } from "./styles";

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jeymison Menezes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Jeymison
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor
      </Descricao>
      <ButtonTema>Trocar tema</ButtonTema>
    </SideBarContainer>
  </aside>
);

export default SideBar;
