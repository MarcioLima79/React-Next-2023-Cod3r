import Contador from "@/components/comunicacao/indireta/Contador"

const PaginaIndireta = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10 font-black">Comunicação Indireta</h1>
      <div className={`flex gap-5`}>
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  )
}

export default PaginaIndireta
