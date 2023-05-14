interface FilhoProps {
  nome: string
  sobrenome: string
}

const Filho = (props: FilhoProps) => {
  return (
    <div
      className={`
      flex justify-center items-center
      bg-green-500 rounded-md p-2 border border-white
      `}
    >
      <div className="flex justify-center gap-2 text-md">
        <span className="font-black">Filho</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
    </div>
  )
}

export default Filho
