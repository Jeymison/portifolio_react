import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkButton } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
);

export default Projeto;
