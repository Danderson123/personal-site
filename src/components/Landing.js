
import banner from './banner-01.png'

function Landing(props) {
  return (
    <div className="landing-container" style={{height: props.windowHeight + "px", width: props.windowWidth + " px",  backgroundImage:`url(${banner})`}}>
      <div className="landing-text" style={{fontSize:(props.windowHeight*0.08 + "px")}}> DANIEL ANDERSON </div>
    </div>
  );
}

export default Landing;
