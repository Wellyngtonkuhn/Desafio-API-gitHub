import { useState } from "react";

import styled from "styled-components";

import gitHubLogo from "./assets/github.png";

import Input from "./components/Input";
import Button from "./components/Button";
import ItemRepo from "./components/ItemRepo";

import { api } from "./services/api";

export default function App() {
  const [search, setsearch] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    const { data } = await api.get(`repos/${search}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setsearch("");
      } else {
        alert("Item já está na lista");
        setsearch("");
      }
    }
  };

  const handleRemove = (id) => {
    const newRepo = repos.filter((repo) => repo.id !== id);

    setRepos(newRepo);
  };

  return (
    <Container>
      <img src={gitHubLogo} alt="github Logo" width={72} height={72} />
      <Input value={search} onChange={(e) => setsearch(e.target.value)} />
      <Button handleSearch={handleSearch} />
      {repos.map((repo) => (
        <ItemRepo
          repo={repo}
          handleRemove={() => handleRemove(repo.id)}
          chave={repo.id}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 0;
`;
