import {useRef} from 'react'

const Header = () => {
    // Criando referências para cada seção
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    // Função para rolar até a seção desejada
    const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div>
        {/* Header com botões */}
        <header>
          <button onClick={() => scrollToSection(section1Ref)}>Seção 1</button>
          <button onClick={() => scrollToSection(section2Ref)}>Seção 2</button>
          <button onClick={() => scrollToSection(section3Ref)}>Seção 3</button>
        </header>
      </div>
    );
}

export default Header