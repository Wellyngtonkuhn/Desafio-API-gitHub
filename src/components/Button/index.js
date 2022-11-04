import { ButtonContainer } from "./style";

export default function Button({ handleSearch }) {
  return (
    <ButtonContainer>
      <button onClick={handleSearch}>Pesquisar</button>
    </ButtonContainer>
  );
}
