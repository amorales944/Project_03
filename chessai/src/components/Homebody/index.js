import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Homebody() {
  return (
    <div id="homebody">
        <h1>Choose Single Player or Multiplayer</h1>
             <Link to="/Singleplayer"><button  id="button1">Single Player</button>
      </Link>
            <Link to="/Multiplayer"><button id="button2">Multiplayer</button>
      </Link>

      <div className="row">
        <div className="col"></div>
        <div className="col"><Link to="/Signin"><button id="button2">Sign In</button>
      </Link></div>
        <div className="col"></div>
      </div>
    </div>


          

  )
}

export default Homebody;
