import React from "react";
import styled from "styled-components";
import { theme } from "../../utils";

const ArticleStyled = styled.article`
  overflow: hidden;
  font-size: 0.99rem;

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
  }
  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  blockquote {
    border-left: 4px solid ${theme.secondary};
    font-size: 1.05rem;
    padding: 20px;
  }
`;

const Article = ({ children, ...rest }) => (
  <ArticleStyled {...rest}>{children}</ArticleStyled>
);

export default Article;
