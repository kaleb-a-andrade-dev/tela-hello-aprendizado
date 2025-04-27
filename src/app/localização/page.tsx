"use client"; // Permite uso de hooks do lado do cliente

import { useContextDefault } from "@/context/Context"; // Hook para acessar o contexto global
import BarraLateral from "../components/BarraLateral"; // Barra de navegação lateral
import menu from "../utils/menuStructure"; // Estrutura do menu
import GoogleMap from "./GoogleMaps"; // Componente de mapa

const LocalizacaoPage: React.FC = () => {
  // Encontra o submenu relacionado ao item "LOCALIZAÇÃO"
  const submenuArray = menu.find(
    (item) => item.title === "LOCALIZAÇÃO"
  )?.submenu;

  // Acesso ao contexto global
  const context = useContextDefault();
  const submenu = context?.submenu; // Qual submenu está ativo (ex: "ULTRATOUR" ou "MAPAS")
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {}; // Função para mudar o submenu atual

  return (
    // Layout da página em grid com 12 colunas
    <div
      className="w-full h-screen grid grid-cols-12 justify-center items-center bg-[#ECEADA] font-[Montserrat]"
      style={{ minHeight: "800px" }}
    >
      {/* Coluna da esquerda — Barra Lateral */}
      <div className="col-span-3 w-full h-full py-12 px-8 flex flex-col gap-y-4">
        <BarraLateral />
      </div>

      {/* Coluna da direita — Conteúdo principal */}
      <div className="col-span-9 w-full h-full py-12 pr-8">
        <div className="w-full h-full rounded-xl flex flex-col">
          
          {/* Área principal do conteúdo */}
          <div className="w-full h-full bg-foreground rounded-lg">
            {/* Exibe um tour virtual se o submenu for "ULTRATOUR" */}
            {submenu === "ULTRATOUR" && (
              <iframe
                src="https://skylineip.s3.sa-east-1.amazonaws.com/Tour+Virtual/GPL/GPL+-+Hello/index.htm"
                className="w-full h-full rounded-lg"
                title="ultratour"
              ></iframe>
            )}

            {/* Exibe o mapa interativo se o submenu for "MAPAS" */}
            {submenu === "MAPAS" && (
              <GoogleMap />
            )}
          </div>

          {/* Botões de navegação entre os submenus */}
          <div className="w-full bg-foreground rounded-lg mt-4 flex p-5 gap-4">
            {submenuArray?.map((item) => (
              <button
                key={item}
                className={` ${
                  submenu === item
                    ? "bg-background text-foreground" // Botão ativo
                    : "text-background border-2 border-background" // Botão inativo
                }  p-2 rounded-full px-16 ml-4`}
                onClick={() => setSubmenuAndSelected(item, "/localizacao")} // Atualiza o submenu
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalizacaoPage;
