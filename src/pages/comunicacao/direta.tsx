import Avo from "@/components/comunicacao/direta/Avo"

const PaginaDireta = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl mb-10">Comunicação Direta</h1>
      <Avo nome="Mariano" sobrenome="Silva" />
    </div>
  )
}

export default PaginaDireta
