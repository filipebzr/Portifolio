import PropTypes from "prop-types";

const BtnMenu = ({ Title, Section }) => {
    const scrollToSection = (sectionRef) => {
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <button
        className="bg-slate-500 rounded-xl hover:bg-slate-200 text-white hover:text-black w-full py-2 transition-all duration-300"
        onClick={() => scrollToSection(Section)}
      >
        {Title}
      </button>
    );
  };

  BtnMenu.propTypes = {
    Title: PropTypes.string.isRequired,
    Section: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }).isRequired,
  };
  
  export default BtnMenu;
  