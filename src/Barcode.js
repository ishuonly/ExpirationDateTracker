import './App.css';
import Footer from './Footer';
import camera from './images/camera.svg';

const Barcode = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='barcode'>
            <div className="head">
                <div className="head-text">Bar Code</div>
            </div>
            <div className="bar-cont">
                <p className="bar-head">Scan Your Bar Code</p>
                <form onSubmit={handleSubmit}>
                    <button className="camera">
                        <img src={camera} alt="camera" />
                    </button><br />
                    <button type="submit" className="save-btn">SAVE</button><br />
                    <a href="/edit" className="signin-text">Go Back</a>
                </form>

            </div>
            <Footer />
        </div>
    );
};

export default Barcode;
