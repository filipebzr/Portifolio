import Card from "./Geo/Card";

const ProjectsGeo = () => {
  return (
    <div
      className={`min-h-screen ${"bg-slate-300"} py-8 px-8 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="grid grid-cols-2 items-center justify-items-center gap-8 p-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
       <Card title="Pavimentação" img="../../assets/aws-certified-cloud-practitioner.png" />
       <Card title="Iluminação" />
       <Card title="Laser 3D" />
       <Card title="Drones" />
      </div>
    </div>
  );
};

export default ProjectsGeo;
