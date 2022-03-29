
import './App.css';
import './style.css';
import  img from './mageInSrc.jpg';
import  myVideo from './myVideo.mp4';

function App() {
  return (
    <div >
      <div style={{border:"solid 1px black",maxWidth:"100vw" }}>

        <h1 className="title red">Abir</h1>

       

        <img src={ "/imageInPublic.jpg" } alt="public"
        width="340" length=" 150"/>

       

        <img src={img} alt="src" width="340" length=" 50" />

      </div>
        <video width="320" height="240" controls>
        <source src={myVideo}  type="video/mp4"/> 
        </video>
    </div>
  );
}

export default App;
