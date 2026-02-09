import BusinessImage from './BusinessImage';
import Navbar from './Navbar';

function BusinessImageDemo() {
    return (
        <div style={{ 
            backgroundColor: '#020f14', 
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <Navbar />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 80px)',
                padding: '2rem'
            }}>
                <BusinessImage />
            </div>
        </div>
    );
}

export default BusinessImageDemo;
