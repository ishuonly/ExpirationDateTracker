import './App.css';
import Footer from './Footer';
import TabBar from './TabBar';

const Receipt = () => {
    
    return (
        <div className='receipt'>
            <div className="head">
                <div className="head-text">Receipt</div>
            </div>
            <div className="rec-cont">
                <TabBar />
            </div>
            <Footer />
        </div>
    );
};

export default Receipt;
