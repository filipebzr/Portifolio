import PropTypes from "prop-types";

const Card = ({ titulo, img }) => {
    
  Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };

  return (
    <div className="w-[200px]">
      <div
        className="flex flex-col items-center shadow-lg rounded-lg bg-white/80 backdrop-blur-lg hover:tracking-tighter
              hover:transition-all hover:shadow-2xl hover:bg-white/100"
      >
        <img
          src={img}
          alt="Certificação AWS"
          className="h-[200px] w-[200px] items-start mx-auto"
        />
        <h1 className="text-2xl justify-center">{titulo}</h1>
      </div>
    </div>
  );
};

export default Card;
