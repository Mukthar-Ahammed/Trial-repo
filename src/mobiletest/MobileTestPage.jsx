import ValidateCard from './ValidateCard';
import './MobileTestPage.css';

function MobileTestPage() {
  return (
    <div className="mobile-test-page">
      <div className="mobile-test-container">
        <h1 className="mobile-test-title">Mobile Test - Validate Card</h1>
        <div className="mobile-test-card-wrapper">
          <ValidateCard />
        </div>
      </div>
    </div>
  );
}

export default MobileTestPage;
