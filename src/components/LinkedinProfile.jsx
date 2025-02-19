import fotoPerfil from "../assets/perfil.jpg";
import bgTitle from "../assets/bg-perfil.jpg";
import BtnMenu from "./BtnMenu";
import QRCode from "../assets/QRCODEPROFILE.png";
import { useRef } from "react";
import Formacao from "./Formacao";
import Habilidade from "./Habilidades";
import Titles from "./Titles";
import ExpProfissionais from "./ExpProfissionais";
import AWSCertifyPractitioner from "../assets/aws-certified-cloud-practitioner.png";
import Certification from "./Certification";
import BtnProjects from "./BtnProjects";

const LinkedInProfile = () => {
  const sectionTrabalho = useRef(null);
  const sectionFormacao = useRef(null);
  const sectionSkills = useRef(null);
  const SectionCertify = useRef(null);
  const SectionProjects = useRef(null);

  return (
    <div
      className={`min-h-screen ${"bg-slate-300"} py-8 px-8 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      {/* Menu Lateral (Desktop) */}
      <div className="fixed h-1/3 w-1/6 pt-8 left-8 hidden lg:block">
        <header className="flex flex-col pl-15 space-y-4">
          <BtnMenu Section={sectionFormacao} Title="Formação" />
          <BtnMenu Section={sectionTrabalho} Title="Experiência" />
          <BtnMenu Section={SectionProjects} Title="Projetos" />
          <BtnMenu Section={sectionSkills} Title="Skills" />
          <BtnMenu Section={SectionCertify} Title="Certificações" />
        </header>
      </div>

      {/* Container Principal */}
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-lg shadow-lg overflow-hidden">
        {/* Cabeçalho com Foto */}
        <div
          className="dark:text-slate-700 h-[500px] lg:h-[316px] w-full flex flex-col p-6 justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgTitle})` }}
        >
          <div className="flex items-center space-x-6 -my-20 px-2 flex-col  dark:text-black lg:flex-row">
            <img
              src={fotoPerfil}
              alt="Filipe Bezerra"
              className="w-40 h-40 rounded-full border-4 object-cover border-white"
            />
            <div className="bg-white space-y-2 w-full flex-col p-4 bg-opacity-90 rounded-2xl my-8">
              <h1 className="text-2xl font-bold text-center lg:text-left">
                Filipe Bezerra
              </h1>
              <p className="text-xl font-semibold text-center lg:text-left">
                Engenheiro Ambiental & Desenvolvedor Frontend  Geoprocessamento
                & React.js
              </p>
              <p className="text-sm text-center lg:text-left">
                João Pessoa, Paraíba, Brasil
              </p>
              <p className="text-sm font-semibold text-center lg:text-left">
                Meus Projetos:
              </p>
              <div className="gap-4 flex flex-col lg:flex-row">
                <BtnProjects
                  cor="green"
                  link="geo"
                  projeto="Geoprocessamento"
                />
                <BtnProjects cor="blue" link="tech" projeto="Frontend" />
              </div>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div className="p-6 border-b">
          <Titles title="Resumo" />
          <p className="text-gray-600 leading-relaxed">
            Profissional multidisciplinar com formação em Engenharia Ambiental e
            atuação em tecnologia. Combino expertise em geoprocessamento
            (ArcGIS, QGIS, drones) com desenvolvimento frontend moderno (React,
            TypeScript) e soluções em nuvem AWS. Busco integrar geotecnologias e
            desenvolvimento de software para criar impactos tangíveis.
          </p>
        </div>

        {/* Formação Acadêmica */}
        <section ref={sectionFormacao}></section>
        <div className="p-6 border-b">
          <Titles title="Formação Acadêmica" />
          <Formacao />
        </div>

        {/* Experiência Profissional */}
        <section ref={sectionTrabalho}></section>
        <div className="group relative p-6 rounded-xl">
          <Titles title="Experiência Profissional" />
          <ExpProfissionais
            title="Compass UOL"
            cargo="Desenvolvimento FrontEnd - React.Js | Nov 2024 - Presente"
          />
          <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
            <li>Desenvolvimento de interfaces com React.js e TypeScript</li>
            <li>Participação em sprints ágeis (Scrum)</li>
            <li>Projetos com HTML/CSS/JavaScript</li>
            <li>Computação em Nuvem com AWS</li>
          </ul>{" "}
          <ExpProfissionais
            title="Outlier"
            cargo="AI Traner - Freelance | Jan 2025 - Presente"
          />
          <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
            <li>Criação e Refinamento de Prompts</li>
            <li>Avaliação de Desempenho dos LLMs</li>
            <li>Curadoria de Dados Especializados</li>
          </ul>
          <ExpProfissionais
            title="Prefeitura de João Pessoa"
            cargo="Analista de Geoprocessamento | Jan 2022 - Presente"
          />
          <ul className="list-disc pl-6 text-gray-600 my-4 space-y-2">
            <li>Criação do Portal GeoSeinfra e dashboards interativos</li>
            <li>Processamento de dados de drones/LaserScan para modelos 3D</li>
            <li>Automação de processos com Python e SQL</li>
          </ul>
          <ExpProfissionais
            title=""
            cargo="Técnico de Informática | Jul 2021 - Dez 2021"
          />
          <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
            <li>Suporte aos usuários</li>
            <li>Suporte de Rede e Servidor</li>
            <li>Backup e Banco de Dados</li>
          </ul>
        </div>
        <section ref={SectionProjects}></section>
        <div className="p-6 border-b">
          <Titles title="Projetos" />
          <div className="gap-4 flex flex-col lg:flex-row">
            <BtnProjects cor="green" link="geo" projeto="Geoprocessamento" />
            <BtnProjects cor="blue" link="tech" projeto="Frontend" />
          </div>
        </div>

        {/* Habilidades */}
        <div className="p-6 border-b">
          <section ref={sectionSkills}></section>
          <Titles title="Habilidades" />
          <div className="grid grid-cols-2 gap-6 mb-8 transition-all">
            {/* Primeira Coluna */}
            <div className="space-y-6">
              <Habilidade habilidade="ArcGis Pro" color="eng" percentage={85} />
              <Habilidade
                habilidade="ArcGis Online"
                color="eng"
                percentage={80}
              />
              <Habilidade
                habilidade="Agisoft Metashape"
                color="eng"
                percentage={65}
              />
              <Habilidade habilidade="QGIS" color="eng" percentage={55} />
              <Habilidade habilidade="AutoCAD" color="eng" percentage={45} />
              <Habilidade habilidade="Scrum" color="tech" percentage={80} />
            </div>

            {/* Segunda Coluna */}
            <div className="space-y-6">
              <Habilidade habilidade="Git" color="tech" percentage={60} />
              <Habilidade habilidade="Python" color="tech" percentage={60} />
              <Habilidade
                habilidade="TypeScript"
                color="tech"
                percentage={30}
              />
              <Habilidade
                habilidade="JavaScript"
                color="tech"
                percentage={30}
              />
              <Habilidade habilidade="React.js" color="tech" percentage={25} />
              <Habilidade habilidade="AWS" color="tech" percentage={25} />
            </div>
          </div>
        </div>

        {/* Certificações */}
        <section ref={SectionCertify}></section>
        <div className="p-6 border-b ">
          <Titles title="Certificações" />
          <Certification
            title="Bootcamp Experiência do Usuário (UX)"
            description="Atlântico Avanti | Mar 2024 – Ago 2024"
            link="https://www.linkedin.com/posts/filipebzr_certificado-bootcamp-ux-activity-7215000848404254722-TULu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0wISwBD-nWAm0iciDC56gTJOsK0vHiQPc"
          />
          <Titles title="Certificações AWS" />
          <div className="flex">
            <img
              src={AWSCertifyPractitioner}
              alt="Certificação AWS"
              className="h-[200px] w-[200px] items-start shadow-xl mx-auto"
            />
          </div>
        </div>

        {/* Seção de Contato (Mobile) */}
        <div className="lg:hidden p-6 border-t">
          <div className="space-y-2 text-center text-gray-600">
            <Titles title="Contato" />
            <p>filipe.bezerra@gmail.com</p>
            <p>+55 83 99653-8485</p>
            <p className="text-blue-600 hover:text-blue-800">
              <a
                href="https://linkedin.com/in/filipebzr"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/filipebzr
              </a>
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                className="h-32 w-32"
                src={QRCode}
                alt="QR Code de Contato"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Contato (Desktop) */}
      <div className="hidden dark:bg-white/60 lg:block fixed space-y-2 text-lg top-0 right-6 rounded-lg p-4 pr-4 z-20 text-center mt-8 text-gray-600">
        <Titles title="Contato" />
        <p>filipe.bezerra@gmail.com</p>
        <p>+55 83 99653-8485</p>
        <p className="text-blue-600 hover:text-blue-800">
          <a
            href="https://linkedin.com/in/filipebzr"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/filipebzr
          </a>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <img className="h-40 w-40" src={QRCode} alt="QR Code de Contato" />
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
