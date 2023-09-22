import React from "react";
import '../../Asserts/OrderTrack.css';

const OrderTrackPage=()=>{
  return(
    <div className="track-container">
      <div className="auto-grid">
          <li className="completed">Item 1</li>
          <li className="pending">Item 2</li>
          <li className="not-started">Item 3</li>
          <li className="completed">Item 4</li>
          <li className="pending">Item 5</li>
          <li className="not-started">Item 6</li>
          <li className="completed">Item 7</li>
          <li className="pending">Item 8</li>
          <li className="not-started">Item 9</li>
          <li className="completed">Item 10</li>
          <li className="pending">Item 11</li>
          <li className="not-started">Item 12</li>
      </div>
    </div>
  );
}

export default OrderTrackPage;