import EnergyCard from '../components/EnergyCard';
import ModalVideo from '../components/ModalVideo';

const EnergyTypes = () => {
  const energies = [
    { name: "Solar", description: "Energia do sol.", image: "/images/solar.jpg" },
    { name: "Eólica", description: "Vento como fonte.", image: "/images/wind.jpg" },
    { name: "Hidrelétrica", description: "Água gerando energia.", image: "/images/hydro.jpg" },
  ];

  return (
    <section className="container py-5">
      <h2>Tipos de Energia Limpa</h2>
      <div className="row">
        {energies.map((energy) => (
          <div className="col-md-4" key={energy.name}>
            <EnergyCard energy={energy} />
          </div>
        ))}
      </div>
      <ModalVideo videoUrl="https://www.youtube.com/embed/example" />
    </section>
  );
};

export default EnergyTypes;
