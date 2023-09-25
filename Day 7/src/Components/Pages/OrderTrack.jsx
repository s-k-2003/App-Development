import React from "react";
import '../../Asserts/OrderTrack.css';

const OrderTrackPage=()=>{
  return(
    <div className="track-container">
      <div className="auto-grid">
          <li className="take-out completed">
            <h3 className="order-type">Take Out</h3>
            <p className="order-time"><span>00:00:31</span></p>
            <p className="order-id">Id : <span>34</span></p>
            <h3 className="order-table">Table No : <span>2</span></h3>
            <h3 className="customer">Customer Name</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dosa</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
            {/* <h3 className="finish">Click To Finish</h3> */}
          </li>
          <li className="dine">
            <h3 className="order-type">Dine</h3>
            <p className="order-time"><span>00:00:31</span></p>
            <p className="order-id">Id : <span>34</span></p>
            <h3 className="order-table">Table No : <span>2</span></h3>
            <h3 className="customer">Customer Name</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dosa</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dine">
            <h3 className="order-type">Dine</h3>
            <p className="order-time"><span>00:00:31</span></p>
            <p className="order-id">Id : <span>34</span></p>
            <h3 className="order-table">Table No : <span>2</span></h3>
            <h3 className="customer">Customer Name</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dosa</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="take-out">
            <h3 className="order-type">Take Out</h3>
            <p className="order-time"><span>00:00:31</span></p>
            <p className="order-id">Id : <span>34</span></p>
            <h3 className="order-table">Table No : <span>2</span></h3>
            <h3 className="customer">Customer Name</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dosa</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="take-out">
            <h3 className="order-type">Take Out</h3>
            <p className="order-time"><span>00:00:31</span></p>
            <p className="order-id">Id : <span>34</span></p>
            <h3 className="order-table">Table No : <span>2</span></h3>
            <h3 className="customer">Customer Name</h3>
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dosa</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </li>
      </div>
    </div>
  );
}

export default OrderTrackPage;