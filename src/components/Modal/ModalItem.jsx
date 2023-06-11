import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { StyledTrashIcon } from "./StyledTrashIcon";
import { StyledModalItem } from "./StyledModalItem";
import { StyledDivModal } from "./StyledDivModal";

export const ModalItem = ({ item, onDelete }) => {
  const handleOnDelete = () => {
    onDelete(item.id);
  };

  return (
    <StyledModalItem>
      <div>
        <img src={item.img} alt="Imagem dos alimentos" />
      </div>
      <StyledDivModal>
        <h2>{item.name}</h2>
        <p>{item.count} unidades</p>
        <StyledTrashIcon icon={faTrash} onClick={handleOnDelete} />
      </StyledDivModal>
    </StyledModalItem>
  );
};
