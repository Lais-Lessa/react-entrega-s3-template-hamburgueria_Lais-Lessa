import { StyledHeader } from "./HeaderStyled/StyledHeader";
import { StyledLogoContainer } from "./HeaderStyled/StyledLogoContainer";
import { StyledSearchIcon } from "./HeaderStyled/StyledSearchIcon";
import { StyledWrapper } from "./HeaderStyled/StyledWrapper";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyledSearchContainer } from "./HeaderStyled/StyledSearchContainer";
import { StyledCartContainer } from "./HeaderStyled/StyledCartContainer";
import { Input } from "./Input/input";
import { StyledIconCart } from "./HeaderStyled/StyledIconCart";
import { StyledIconContainer } from "./HeaderStyled/StyledIconContainer";
import { useEffect, useState } from "react";

export const Header = ({ openCart, count, searchList }) => {
  const [valueInput, setValueInput] = useState("");

  const handleOpenCart = () => {
    openCart(true);
  };

  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };

  useEffect(() => {
    searchList(valueInput);
  }, [valueInput]);

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogoContainer>
          <img src="/logo.png" alt="logo" />
          <StyledCartContainer onClick={handleOpenCart}>
            <div>
              <span>{count}</span>
            </div>
            <StyledIconCart icon={faCartShopping} />
          </StyledCartContainer>
        </StyledLogoContainer>
        <div>
          <StyledSearchContainer>
            <Input
              type={"search"}
              placeholder={"Digite sua pesquisa"}
              onChange={handleValueInput}
            />
            <StyledIconContainer>
              <StyledSearchIcon icon={faSearch} />
            </StyledIconContainer>
          </StyledSearchContainer>
        </div>
      </StyledWrapper>
    </StyledHeader>
  );
};
