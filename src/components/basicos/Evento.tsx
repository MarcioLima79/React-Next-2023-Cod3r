const Evento = () => {
  let contador = 0

  const incrementar = () => {
    console.log(contador++)
  }

  return (
    <button
      className={`
      flex justify-center items-center
      h-36 w-72 bg-green-600 text-4xl
      `}
      onClick={incrementar}
    >
      Evento
    </button>
  )
}

export default Evento
