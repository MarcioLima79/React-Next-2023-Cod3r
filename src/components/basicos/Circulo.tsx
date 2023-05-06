interface CirculoProps {
  texto: string
  quasePerfeito?: boolean
}

const Circulo = (props: CirculoProps) => {
  return (
    <div
      className={`
      flex justify-center items-center
      h-64 w-64 bg-cyan-500 
      text-black font-black text-3xl
      ${props.quasePerfeito ? "rounded-3xl" : "rounded-full"}
  `}
    >
      {props.texto}
    </div>
  )
}

export default Circulo
