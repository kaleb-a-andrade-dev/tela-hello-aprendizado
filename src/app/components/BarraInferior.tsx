'use client';

import React, {useState, useEffect} from "react";
import menu from "../utils/menuStructure";
import {useContextDefault} from "../../context/Context";

interface BarraInferiorProps {
    // Add any additional props if needed
    styleDiv?: string;
    styleButton?: string;
}
const BarraInferior: React.FC<BarraInferiorProps> = ({
    styleDiv,
    styleButton,
}) => {
    const context = useContextDefault();
    const selected = context?.selected;
    const [indexSelect, setIndexSelect] = useState(
        menu.findIndex((e) => e?.caminho === selected)
    );
    const [open, setOpen] = useState(false);
    const submenu = context?.submenu;
    const styleDiv1 = 
        styleDiv ||
        "fixed flex justify-center items-center h-1/6 bottom-0 right-0 w-full pl-[20%] pr-[2%] transition-transform duration-300 ease-in-out z-10 gap-4";
    const styleButton1 =
        styleButton ||
        "flex justify-center items-center w-1/6 gap-4 bg-background rounded";

    const setSubmenuAndSelected = context
        ? context.setSubmenuAndSelect
        : () => {};

    // Atualiza o índice selecionado sempre que o caminho muda
    useEffect(() => {
    setIndexSelected(menu.findIndex((e) => e?.caminho === selected)); // Atualiza o índice de acordo com o caminho atual
    setOpen(false); // Fecha o submenu antes de reabrir
    const timer = setTimeout(() => {
      setOpen(true); // Abre o submenu com um pequeno delay (700ms)
    }, 700);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou o efeito reiniciado
}, [selected]);

    return (
    <>
    {open && (
        // Renderiza o submenu se `open` for true, com animação de entrada
        <div className={`${styleDiv1} animate-fade-up animate-duration-[2000ms]`} key="div do submenu">
          {/* Mapeia os itens do submenu baseado no item de menu selecionado */}
            {menu[indexSelected]?.submenu?.map((e) => {
            return (
            <button
                key={e}
                className={styleButton1}
                onClick={() => selected && setSubmenuAndSelected(e, selected)} // Atualiza o submenu selecionado ao clicar
            >
                <span
                className={`${
                    submenu === e ? "border-2 border-foreground" : "shadow-lg"
                  } p-2 rounded w-full flex justify-center`} // Destaque visual se o submenu estiver ativo
                >
                  {e} {/* Nome do submenu */}
                </span>
            </button>
            );
        })}
        </div>
    )}
    </>
);
};

export default BarraInferior;
