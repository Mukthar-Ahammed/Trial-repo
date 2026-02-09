import './ConsultingDNA.css';
import consultingBg from './consulting-dna-bg.png';

function ConsultingDNA() {
  return (
    <div className="consulting-dna-card">
      <img 
        src={consultingBg} 
        alt="" 
        className="consulting-dna-bg"
      />
      <div className="consulting-dna-overlay"></div>
      <h2 className="consulting-dna-title">
        Consulting<br />DNA
      </h2>
    </div>
  );
}

export default ConsultingDNA;
