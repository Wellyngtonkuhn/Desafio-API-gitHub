import { InputContainer } from "./style";

export default function Input({ value, onChange }) {
  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="pesquisar"
          value={value}
          onChange={onChange}
        />
      </InputContainer>
    </>
  );
}
