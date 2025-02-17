import React from "react";

const Habilidade = ({ habilidade, color, percentage }) => {
  const colors = {
    tech: {
      bg: "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800",
      text: "text-white dark:text-blue-100",
      gradient: "url(#tech-gradient)",
      darkGradient: "url(#tech-gradient-dark)",
    },
    eng: {
      bg: "bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-700 dark:to-emerald-800",
      text: "text-white dark:text-green-100",
      gradient: "url(#eng-gradient)",
      darkGradient: "url(#eng-gradient-dark)",
    },
    default: {
      bg: "bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-800",
      text: "text-gray-800 dark:text-gray-200",
      gradient: "#b8b9ba",
      darkGradient: "#4b5563",
    },
  };

  const selectedColor = colors[color] || colors.default;
  const raio = 45;
  const circunferencia = 2 * Math.PI * raio;

  return (
    <>
      <svg width="0" height="0">
        {/* Gradientes para light mode */}
        <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="eng-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Gradientes para dark mode */}
        <linearGradient
          id="tech-gradient-dark"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient
          id="eng-gradient-dark"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </svg>

      {percentage !== undefined ? (
        <div className="group relative w-32 mb-4 cursor-pointer">
          <div className="relative w-24 h-24 mx-auto">
            <svg
              className="w-24 h-24 drop-shadow-lg dark:drop-shadow-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r={raio}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="10"
                className="backdrop-blur-sm dark:stroke-gray-700"
              />

              {/* Barra de progresso animada */}
              <circle
                cx="50"
                cy="50"
                r={raio}
                fill="none"
                stroke={selectedColor.gradient}
                strokeWidth="10"
                strokeDasharray={circunferencia}
                strokeDashoffset={circunferencia * (1 - percentage / 100)}
                className="transition-[stroke-dashoffset] duration-1000 ease-out dark:hidden"
                strokeLinecap="round"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
              />

              {/* Versão dark */}
              <circle
                cx="50"
                cy="50"
                r={raio}
                fill="none"
                stroke={selectedColor.darkGradient}
                strokeWidth="10"
                strokeDasharray={circunferencia}
                strokeDashoffset={circunferencia * (1 - percentage / 100)}
                className="transition-[stroke-dashoffset] duration-1000 ease-out hidden dark:block"
                strokeLinecap="round"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
              />
            </svg>

            <span
              className={`absolute inset-0 text-center flex items-center justify-center 
              text-black text-base font-bold tracking-tighter
              transition-all group-hover:-translate-y-1`}
            >
              {habilidade}
              <span
                className="absolute -bottom-6 text-xs font-medium text-gray-500 
                dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity
                w-full text-center"
              >
                {percentage}%
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div
          className="relative inline-block group transform transition-all 
          hover:-translate-y-1"
        >
          <span
            className={`${selectedColor.bg} ${selectedColor.text} 
            px-4 py-2 rounded-full text-sm font-medium shadow-lg
            hover:shadow-xl transition-all backdrop-blur-sm`}
          >
            {habilidade}
          </span>
        </div>
      )}
    </>
  );
};

export default Habilidade;
