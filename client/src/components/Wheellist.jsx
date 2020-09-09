import Axios from 'axios';
import React,{useContext, useEffect} from 'react';
import WheelLocator from "../apis/WheelLocator";
import {WheelsContext} from "../context/WheelsContext";

const  Wheellist = () => { 
  
    const { wheels, setWheels } =  useContext(WheelsContext);
  useEffect(() => {
      const fetchData = async () =>{
        componentDidMount() {
            var th = this;
            this.serverRequest = axios.get(this.props.source)
            .then(function(event) { 
                th.setState({
                    data: event.data
                });
            })
           }
           
           componentWillUnmount() {
             this.serverRequest.abort();
           }
         fetchData();
  },[];
  //just try to append the code sharedd in the example and let me know if you face any problem.

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
            <thead> 
                <tr className="bg-primary">
                <th scope ="col">Wheel</th>
                <th scope ="col">Location</th>
                <th scope ="col">Price Range</th>
                <th scope ="col">Ratings</th>
                <th scope ="col">Edit</th>
                <th scope ="col">Delete</th>
                </tr>
            </thead>
            <tbody> 
                {wheels && wheels.map(wheel => {
                    return ( 
                        <tr key={wheel.id} >
                        <td>wheel.name</td>
                        <td>wheel.location</td>
                        <td>{"$".repeat(wheel.price_range)}</td>
                        <td>Reviews</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    );
                })}
                    


             {/*} <tr>
                  <td>El_PARBEL</td>
                  <td>India, Earth</td>
                  <td>$$$$$</td>
                  <td>*****</td>
                  <td><button className="btn btn-warning">Update</button></td>
                  <td><button className="btn btn-danger">Delete</button></td>
                  </tr>  

                  <tr>
                  <td>Wendy's</td>
                  <td> Lake Road, Kolkata</td>
                  <td>$$</td>
                  <td>****</td>
                  <td><button className="btn btn-warning">Update</button></td>
                  <td><button className="btn btn-danger">Delete</button></td>
                  </tr> 

                  <tr>
                  <td>Natureleza On Wheel</td>
                  <td>WTC, Jaipur</td>
                  <td>$$$$</td>
                  <td>*****</td>
                  <td><button className="btn btn-warning">Update</button></td>
                  <td><button className="btn btn-danger">Delete</button></td>
            </tr> */}

            </tbody>
            </table>
        </div>
    )
}

export default Wheellist;
