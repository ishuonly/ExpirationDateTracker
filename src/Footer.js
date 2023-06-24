import './App.css';
import home from "./images/home.svg";
import settings from "./images/settings.svg";
import add from "./images/add.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <button className="item-f">
        <div className="column1"><img src={home} alt="home" /></div>
      </button>
      <button className="item-f add">
        <div className="column1"><img src={add} alt="add" /></div>
      </button>
      <button className="item-f">
        <div className="column1"><img src={settings} alt="settings" /></div>

      </button>
    </div>
  );
};

export default Footer;
