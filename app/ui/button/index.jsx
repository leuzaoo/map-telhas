import React from "react";

export default function MyButton({ text, style }) {
  let buttonClassName =
    "py-3 px-5 uppercase text-xl lg:text-3xl rounded-xl font-bold transition-all duration-200  hover:opacity-90";

  switch (style) {
    case "primary":
      buttonClassName += " bg-white text-primaryRed";
      break;
    case "white":
      buttonClassName += " bg-transparent";
      break;
    case "red-white":
      buttonClassName += " bg-primaryRed text-white";
      break;
    case "blue-white":
      buttonClassName += " bg-blue-600 text-white";
      break;
    case "dark-white":
      buttonClassName += " bg-strongDark text-white";
      break;
    case "transparent":
      buttonClassName += " bg-transparent text-primaryRed";
      break;
    default:
      // Se nenhum estilo correspondente for encontrado, aplicar estilo padrão
      buttonClassName += " bg-primaryRed hover:opacity-90";
  }
  return (
    <button className={buttonClassName}>
      <span>{text}</span>
    </button>
  );
}
