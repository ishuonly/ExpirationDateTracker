import './App.css';
import Footer from './Footer';
import user from './images/user.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="head">
                <div className="head-text">Profile</div>
            </div>
            <div className="profile-cont">
                <div className="user-info">
                    <img src={user} alt="user" className='user-pic'/>
                    <div className="user-text">
                        <p className="info-text">Name: John Doe</p>
                        <p className="info-text">Email: jd@gmail.com</p>
                        <p className="info-text">Badges Earned: 6</p>
                    </div>
                </div>
                <Link to="/">
                    <button className="p-btns1">Edit</button>
                </Link>
                <Link to="/signin">
                    <button className="p-btns1">Log Out</button>
                </Link> <br />
                <Link to="/">
                    <button className="p-btns">Receipts</button>
                </Link>
                <Link to="/">
                    <button className="p-btns">Settings</button>
                </Link> <br />
                <Link to="/">
                    <button className="p-btns">Badges</button>
                </Link>
                <Link to="/">
                    <button className="p-btns">Coupons</button>
                </Link> <br />
                <Link to="/">
                    <button className="p-btns">Terms & Conditions</button>
                </Link>
                <Link to="/">
                    <button className="p-btns">Additional Information</button>
                </Link> <br /><br /><br />
                <a href="/edit" className="signin-text">Go Back</a>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
