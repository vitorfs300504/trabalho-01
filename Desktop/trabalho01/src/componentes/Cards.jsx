function Card({ titulo, descricao, icone }) {
  return (
    <div className="card fade-in">
      {icone && <div className="card-icon">{icone}</div>}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;