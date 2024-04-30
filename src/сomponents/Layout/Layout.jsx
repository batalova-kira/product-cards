import React from "react";
import { Container, Header, StyledNavLink } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header>
                <StyledNavLink className="header-link" to="/card1">
                    Card 1
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/card2">
                    Card 2
                </StyledNavLink>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
