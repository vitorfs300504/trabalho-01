function Acoes({ texto }) {
  return (
    <button onClick={() => alert(`Você clicou em ${texto}`)}>
      {texto}
    </button>
  );
}

export default Acoes;