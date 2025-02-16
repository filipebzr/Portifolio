import React from "react";

const Habilidade = ({ habilidade, color, percentage }) => {
  const colors = {
    tech: {
      bg: "bg-blue-500",
      text: "text-blue-800",
      stroke: "#0258b8",
    },
    eng: {
      bg: "bg-green-300",
      text: "text-green-900", 
      stroke: "#039c3a",
    },
    default: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      stroke: "b8b9ba",
    },
  };

  const selectedColor = colors[color] || colors.default;

  if (percentage !== undefined) {
    const raio = 45;
    const circunferencia = 2 * Math.PI * raio;
    const offset = circunferencia - (percentage / 100) * circunferencia;

    return (
      <div className="flex items-center justify-center w-32 mb-4"> {/* Aumentar largura e margem */}
        <div className="relative w-24 h-24"> {/* Container maior */}
          <svg
            className="w-24 h-24" // Tamanho igual para SVG
            viewBox="0 0 100 100"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="50"
              cy="50"
              r={raio}
              fill="none"
              stroke="#b8b9ba"
              strokeWidth="10"
              opacity="0.3"
            />
            <circle
              cx="50"
              cy="50"
              r={raio}
              fill="none"
              stroke={selectedColor.stroke}
              strokeWidth="10"
              strokeDasharray={`${circunferencia} ${circunferencia}`}
              strokeDashoffset={offset}
            />
          </svg>
          <span
            className={`absolute inset-0 flex items-center justify-center text-center ${
              selectedColor.text
            } text-base font-bold`} // Texto maior
          >
            {habilidade}
          </span>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`${selectedColor.bg} ${selectedColor.text} px-4 py-2 rounded-full text-lg font-semibold mr-2 mb-2`} // Texto maior
    >
      {habilidade}
    </span>
  );
};

export default Habilidade;