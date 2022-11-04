import { ItemRepoContainer } from "./style";

export default function ItemRepo({ repo, chave, handleRemove }) {
  return (
    <ItemRepoContainer key={chave}>
      <div className="repoInfo">
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url}>Ver mais</a>
        <br />
        <a className="remover" onClick={handleRemove}>
          Remover
        </a>
      </div>

      <div className="repoDescription">
        <p>{repo.description}</p>
      </div>
      <hr />
    </ItemRepoContainer>
  );
}
