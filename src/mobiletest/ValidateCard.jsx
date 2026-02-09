import './ValidateCard.css';

function ValidateCard() {
  return (
    <div className="validate-card">
      <div className="validate-card-background" style={{ backgroundImage: 'url(/validate-card-bg.png)' }}></div>
      
      <div className="validate-card-content">
        <h3 className="validate-card-title">Validate</h3>
        
        <p className="validate-card-description">
          A 1-week sprint to identify high-value opportunities and build the business case, before you commit budget.
        </p>
        
        <a href="#" className="validate-card-link">Start a Discovery</a>
      </div>
    </div>
  );
}

export default ValidateCard;
