import Avo from "@/components/comunicacao/direta/Avo"

const PaginaDireta = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10 font-black">Comunicação Direta</h1>
      <Avo nome="Mariano" sobrenome="Silva" />
      <Avo nome="Antônio" sobrenome="Miranda" />
    </div>
  )
}

export default PaginaDireta
