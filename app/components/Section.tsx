import Button from "./Joinbtn"

export default function Section(){
    return(
      <div className="Section">
        <div className="Section-top">
          <p className="Section-tag">Golf Academy</p>
          <h1>Professional Coaching and Golf Academy</h1>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
  
        <div className="Section-grid">
          {/* Left - tall card spanning 2 rows */}
          <div className="Section-gridL">
            <b>Prosteructors</b>
          </div>
  
          {/* Right - two stacked cards */}
          <div className="Section-gridR">
            <div className="Section-gridR-T">
              <div className="Section-gridR-T1">

              </div>
              <div className="Section-gridR-T2">

              </div>
            </div>
            <div className="Section-gridR-B">
              <b>Lush Landscape & Water Features</b>
            </div>
          </div>
        </div>
        <div className="Section-Bottom">
          <Button />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda doloribus molestias quo ut. <br />
            Quisquam, numquam commodi a illo optio sed! Quod, nisi.
          </p>
        </div>
      </div>
    )
  }