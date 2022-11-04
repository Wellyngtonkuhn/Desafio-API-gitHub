import styled from "styled-components";

export const ItemRepoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  div h3 {
    font-size: 1.3rem;
    color: #fafafa;
    text-transform: capitalize;
  }

  .repoInfo p {
    font-size: 1rem;
    padding-bottom: 0.3rem;
    text-transform: capitalize;
  }

  .repoInfo a {
    color: #ffffff;
    text-decoration: unset;
    transition: all ease 0.3s;
    margin-top: 5rem;
  }

  .repoInfo .remover{
      color: red;
      transition: all ease .3s;
  }

  .repoInfo .remover:hover{
      font-weight: 700;
      font-size: 1.3rem;
  }

  .repoInfo a:hover {
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }

  .repoDescription {
    margin-top: 0.5rem;

    p {
      text-align: justify;
    }

    hr{
      width: 100%;
    }
  }
`;
