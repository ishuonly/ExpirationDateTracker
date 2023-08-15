// Import necessary modules and resources
import './App.css';
import Footer from './Footer';
import TabBar from './TabBar';

// Define the Receipt component
const Receipt = () => {
    return (
        <div className='receipt'>
            <div className="head">
                <div className="head-text">Receipt</div>
            </div>
            <div className="rec-cont">
                {/* Include the TabBar component */}
                <TabBar />
            </div>
            {/* Include the Footer component */}
            <Footer />
        </div>
    );
};

// Export the Receipt component
export default Receipt;