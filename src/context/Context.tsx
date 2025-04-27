'use client' // Indica que esse componente será executado no lado do cliente (necessário por usar hooks)

// Importações necessárias
import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation"; // Hook do Next.js que fornece a rota atual
import menus from "../app/utils/menuStructure"; // Estrutura do menu com caminhos e submenus

// Define a interface do tipo de dado que será armazenado no contexto
export interface Context {
  submenu: string; // Nome do submenu atual
  selected: string; // Caminho atual selecionado (rota)
  setSubmenuAndSelected: (submenu: string, selected: string) => void; // Função para atualizar os dois valores
}

// Criação do contexto, iniciando como undefined (vamos garantir uso com hook)
const ContextDef = createContext<Context | undefined>(undefined);

// Criação do Provider, que envolve toda a aplicação e fornece os dados do contexto
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname(); // Recupera a rota atual da URL

  // Encontra o índice do menu com base na rota atual
const indexSelect = menus.findIndex((e) => e?.caminho === currenthPath);

  // Define o estado inicial com o submenu e caminho atual
const [menu, setMenu] = useState({
    submenu: menus[indexSelect]?.submenu[0], // Primeiro item do submenu da rota atual
    selected: currenthPath, // Caminho atual
});

  // Função usada para atualizar o submenu e o item selecionado
const setSubmenuAndSelected = (submenu: string, selected: string) => {
    setMenu({ submenu, selected });
};

  // Retorna o provider do contexto com os valores e função disponíveis para os filhos
return (
    <ContextDef.Provider value={{ 
        submenu: menu.submenu, 
        selected: menu.selected, 
        setSubmenuAndSelected,
    }}>
        {children}
    </ContextDef.Provider>
)
};

// Hook personalizado para consumir o contexto em outros componentes
export const useContextDefault = () => {
  return useContext(ContextDef); // Retorna o contexto atual (submenu, selected, e função)
};
