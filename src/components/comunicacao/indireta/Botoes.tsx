interface BotoesProps {
  inc: (valor: number) => void
  dec: (valor: number) => void
}

const Botoes = (props: BotoesProps) => {
  return (
    <div className="flex justify-between pt-2 gap-2">
      <button onClick={() => props.dec(10)} className="botao flex-1">
        -10
      </button>
      <button onClick={() => props.inc(13)} className="botao flex-1">
        +13
      </button>
    </div>
  )
}

export default Botoes
