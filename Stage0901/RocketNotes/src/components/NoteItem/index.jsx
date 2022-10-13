import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, onClick, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" readOnly={!isNew} value={value} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
