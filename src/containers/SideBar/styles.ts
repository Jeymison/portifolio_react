import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ButtonTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: #eeeeee;
  background-color: #282a35;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
