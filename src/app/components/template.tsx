import BarraLateral from "../components/BarraLateral"; // Importa o componente da barra lateral esquerda

const Template: React.FC = () => {
  return (
    // Grid que ocupa toda a tela (largura e altura total)
    <div className="w-full h-screen grid grid-cols-12 justify-center items-center bg-[#ECEADA] font-[Montserrat]">
          {/* Coluna da barra lateral (3/12 colunas) */}
      <div className="col-span-3 w-full h-full py-4 px-8 flex flex-col gap-y-4">
        <BarraLateral /> {/* Componente da barra lateral esquerda */}
      </div>

      {/* Coluna de conteúdo principal (9/12 colunas) */}
      <div className="col-span-9 w-full h-full py-4 pr-8">
        <div className="w-full h-full bg-foreground rounded-xl">
          {/* Aqui dentro será exibido o conteúdo principal da página */}
        </div>
      </div>
    </div>
  );
};

export default Template;
