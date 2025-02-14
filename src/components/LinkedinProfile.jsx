import fotoPerfil from "../assets/perfil.jpg";
import bgTitle from "../assets/bg-perfil.jpg";
import { useRef } from "react";
import Formacao from "./Formacao";
import Habilidade from "./Habilidades";

const LinkedInProfile = () => {
  const sectionExp = useRef(null);
  const sectionContact = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="fixed max-w-4xl h-1/3 w-1/6 p-4 ">
        <header className="flex flex-col space-y-4">
          <button
            className="bg-black rounded-xl hover:bg-slate-100 text-white w-1/2"
            onClick={() => scrollToSection(sectionExp)}
          >
            Experiência
          </button>
          <button
            className="bg-black rounded-xl text-white w-1/2"
            onClick={() => scrollToSection(sectionContact)}
          >
            Contato
          </button>
        </header>
      </div>
      {/* Container Principal */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cabeçalho com Foto e Informações Básicas */}
        <div className="h-[316px] w-full flex flex-col p-6 justify-center bg-cover bg-center bg-[url('../assets/bg-perfil.jpg')]">
          <img src={bgTitle} alt="" />
          <div className="flex items-center space-x-6 -my-20 px-2">
            <img
              src={fotoPerfil} // Substitua pelo link da sua foto
              alt="Filipe Bezerra"
              className="w-36 h-36 rounded-full border-4 border-white"
            />
            <div className="bg-white w-full p-4 bg-opacity-90 rounded-2xl my-8">
              <h1 className="text-2xl  font-bold">Filipe Bezerra</h1>
              <p className="text-lg">
                Desenvolvedor Frontend e Especialista em Geoprocessamento
              </p>
              <p className="text-sm">João Pessoa, Paraíba, Brasil</p>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <section ref={sectionExp}>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Resumo</h2>
            <p className="text-gray-600 leading-relaxed">
              Profissional multidisciplinar com formação em Engenharia Ambiental
              e atuação em tecnologia. Combino expertise em geoprocessamento
              (ArcGIS, QGIS, drones) com desenvolvimento frontend moderno
              (React, TypeScript) e soluções em nuvem AWS. Busco integrar
              geotecnologias e desenvolvimento de software para criar impactos
              tangíveis.
            </p>
          </div>
        </section>

        {/* Formação Acadêmica */}
        <Formacao />
        {/* Experiência Profissional */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Experiência
          </h2>

          {/* Experiência 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">Compass UOL</h3>
            <p className="text-gray-600">
              Frontend Developer | Nov 2024 - Presente
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
              <li>Desenvolvimento de interfaces com React.js e TypeScript</li>
              <li>Participação em sprints ágeis (Scrum)</li>
              <li>Projetos educacionais com HTML/CSS/JavaScript</li>
            </ul>
          </div>

          {/* Experiência 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Prefeitura de João Pessoa
            </h3>
            <p className="text-gray-600">
              Analista de Geoprocessamento | Jul 2021 - Presente
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
              <li>Criação do Portal GeoSeinfra e dashboards interativos</li>
              <li>
                Processamento de dados de drones/LaserScan para modelos 3D
              </li>
              <li>Automação de processos com Python e SQL</li>
            </ul>
          </div>
        </div>

        {/* Habilidades */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2 items-center h-[150px]">
            <Habilidade habilidade="ArcGis" color="eng" percentage={80}/>
            <Habilidade habilidade="React.js" color="tech" percentage={25} />
            <Habilidade habilidade="TypeScript" color="tech" percentage={30} />
            <Habilidade habilidade="JavaScript" color="tech" percentage={30} />
            <Habilidade habilidade="Python" color="tech" percentage={60}/>
            <Habilidade habilidade="AWS" color="tech" percentage={25} />
            <Habilidade habilidade="Scrum" color="tech" percentage={80}/>
          </div>
        </div>
      </div>

      {/* Rodapé com Contato */}
      <section ref={sectionContact}>
        <div className="text-center mt-8 text-gray-600">
          <p>📧 filipe.bezerra@gmail.com</p>
          <p className="text-blue-600 hover:text-blue-800">
            <a
              href="https://linkedin.com/in/filipebzr"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/filipebzr
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LinkedInProfile;
