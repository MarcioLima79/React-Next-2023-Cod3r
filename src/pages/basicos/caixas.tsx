import Caixa from "../../components/basicos/Caixa"

const PaginaCaixas = () => {
  return (
    <div className="flex gap-5 p-5">
      <Caixa>#1</Caixa>
      <Caixa>#2</Caixa>
      <Caixa>
        <ul className="list-disc">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Caixa>
    </div>
  )
}

export default PaginaCaixas
