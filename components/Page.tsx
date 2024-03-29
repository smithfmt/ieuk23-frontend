import { ReactNode } from "react";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "radnika_next";
        src: url("/radnikanext-medium-webfont.woff2");
        format: "woff2";
        font-weight: normal;
        font-style: normal;
    }

    :root {
        --red: #ff0000;
        --black: #393939;
        --grey: #3a3a3a;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09)
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: "radnika_next", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    
    button {
        font-family: "radnika_next", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`

const Page = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <InnerStyles>{children}</InnerStyles>
        </div>
    );
};

export default Page;