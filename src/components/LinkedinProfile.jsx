import fotoPerfil from "../assets/perfil.jpg";
import bgTitle from "../assets/bg-perfil.jpg";
import BtnMenu from "./BtnMenu";
import QRCode from "../assets/QRCODEPROFILE.png";
import { useRef } from "react";
import Formacao from "./Formacao";
import Habilidade from "./Habilidades";
import Titles from "./Titles";
import ExpProfissionais from "./ExpProfissionais";
import AWSCertify from "../assets/aws-certified-cloud-practitioner.png";
import Certification from "./Certification";

const LinkedInProfile = () => {
  const sectionTrabalho = useRef(null);
  const sectionFormacao = useRef(null);
  const sectionSkills = useRef(null);
  const SectionCertify = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8 sm:px-6 lg:px-8">
      <div className="fixed h-1/3 w-1/6 pt-8 ">
        <header className="flex flex-col pl-15 space-y-4 hidden lg:flex">
          <BtnMenu Section={sectionFormacao} Title="Formação" />
          <BtnMenu Section={sectionTrabalho} Title="Experiência" />
          <BtnMenu Section={sectionSkills} Title="Skills" />
          <BtnMenu Section={SectionCertify} Title="Certificações" />
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
        <section ref={sectionFormacao}></section>
        <div className="p-6 border-b">
          <Titles title="Formação Acadêmica" />
          <Formacao />
        </div>
        {/* Experiência Profissional */}
        <section ref={sectionTrabalho}></section>
        <div className="p-8 border-b ">
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

        {/* Habilidades */}
        <div className="p-6 border-b">
          <section ref={sectionSkills}></section>
          <Titles title="Habilidades" />
          <div className="flex flex-wrap gap-2 items-center h-[300px] mb-8 ">
            <Habilidade habilidade="ArcGis Pro" color="eng" percentage={85} />
            <Habilidade habilidade="ArcGis Online" color="eng" percentage={80} />
            <Habilidade habilidade="Agisoft Metashape" color="eng" percentage={65} />
            <Habilidade habilidade="QGIS" color="eng" percentage={55} />
            <Habilidade habilidade="AutoCAD" color="eng" percentage={45} />
            <Habilidade habilidade="Scrum" color="tech" percentage={80} />
            <Habilidade habilidade="Git" color="tech" percentage={60} />
            <Habilidade habilidade="Python" color="tech" percentage={60} />
            <Habilidade habilidade="TypeScript" color="tech" percentage={30} />
            <Habilidade habilidade="JavaScript" color="tech" percentage={30} />
            <Habilidade habilidade="React.js" color="tech" percentage={25} />
            <Habilidade habilidade="AWS" color="tech" percentage={25} />
          </div>
          <section ref={SectionCertify}></section>
          <div className="p-6 border-b">
            <Titles title="Certificações" />
            
            <Certification
              title="Bootcamp Experiência do Usuário (UX)"
              description="Atlântico Avanti | Mar 2024 – Ago 2024"
              link="https://www.linkedin.com/posts/filipebzr_certificado-bootcamp-ux-activity-7215000848404254722-TULu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0wISwBD-nWAm0iciDC56gTJOsK0vHiQPc"
            />
            
            <Titles title="Certificações AWS" />
            <img
              src={AWSCertify}
              alt=""
              className="h-[200px] w-[200px] shadow-xl"
            />
          </div>
          <div className="fixed space-y-2 text-xl top-0 right-0 p-4 pr-20 z-20 grid text-center mt-8 text-gray-600 hidden lg:grid ">
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
            <div className="flex justify-center items-center space-x-4">
              <img className="h-[200px] w-[200px]" src={QRCode} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
