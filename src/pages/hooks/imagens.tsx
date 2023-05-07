import ImagemAleatoria from "@/components/hooks/ImagemAleatoria"

const PaginaImagens = () => {
  return (
    <div
      className={`
    flex justify-center items-center h-screen
    gap-5
    `}
    >
      <ImagemAleatoria />
      <ImagemAleatoria />
      <ImagemAleatoria />
    </div>
  )
}

export default PaginaImagens
