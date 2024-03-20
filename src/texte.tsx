import styled from "styled-components";

//tipagem declara como tudo obrigatorio caso nao queira tem colocar o ? ex. fontSize?:
type BotaoProps = {
  principal: boolean;
  fontSize: string; // declara primeiro
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "blue")};
  font-size: ${(props) => props.fontSize || "16px"};
`; // chama a declaracao

//criando um componente a partir de um componente existente usando a heranca
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`;

function Teste() {
  return (
    //inclui a estilizacao
    <>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>{" "}
      <br />
      <Botao fontSize="14px" principal={false}>
        Olhe aqui
      </Botao>
      <br />
      <BotaoPerigo principal fontSize="50px">
        Perigo
      </BotaoPerigo>
    </>
  );
}

export default Teste;
