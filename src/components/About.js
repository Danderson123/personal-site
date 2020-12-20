
function About(props) {
  return (
    <div style={{height: props.windowHeight + "px", width: props.windowWidth + " px"}}>
      <div className="about-text" >
        <div className="about-title" style={{fontSize:(props.windowHeight*0.03 + "px")}}>
          ABOUT ME
        </div>
        <div className="about-grid">
          <div className="about-column-1">
            <p className="about-margin">1.</p>
            <p className="about-margin">2.</p>
            <p className="about-margin">3.</p>
            <p className="about-margin">4.</p>
            <p className="about-margin">5.</p>
          </div>
          <div className="about-column-2">
            <p className="about-margin">6.</p>
            <p className="about-margin">7.</p>
            <p className="about-margin">8.</p>
            <p className="about-margin">9.</p>
            <p className="about-margin">10.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
