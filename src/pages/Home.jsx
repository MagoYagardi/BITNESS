import React from 'react';
import WindowsWin from '../components/WindowsWin'; // Asegúrate de que la ruta sea correcta
import Frase from '../assets/frase_home.png';
import VideoVentanas from '../assets/videobackground_home.mp4';
import SubscriptionTable from '../components/SubscriptionTable';
import '../styles/Home.css'; 


const Home = () => {
  return (
    <div className="home">
      <section> 
        <img src={Frase} alt="cachy" className="frase" />
        <video src={VideoVentanas} autoPlay loop muted />  
      </section>
      <WindowsWin title="planes subs">
        <SubscriptionTable />
      </WindowsWin>
    </div>
  );
};

export default Home;
