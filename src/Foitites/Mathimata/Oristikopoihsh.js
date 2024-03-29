import React from "react";
import { Link } from "react-router-dom";
import './Oristikopoihsh.css'

const Oristikopoihsh = () => { 
    return ( 
        <div className="oristikopoihsh-container">  
            <div className="progress-bar-container3">
                <div className="circle-container">
                    <div className="circle completed"></div>
                    <div className="label">Προβολή</div>
                </div>
                <div className="prog-line completed"></div>
                <div className="circle-container">
                    <div className="circle completed"></div>
                    <div className="label">Δήλωση</div>
                </div>
                <div className="prog-line completed"></div>
                <div className="circle-container">
                    <div className="circle completed"></div>
                    <div className="label">Οριστικοποίηση</div>
                </div>
            </div> 

            <h1 className="oristikopoihsh-message">Επιτυχής οριστικοποίηση δήλωσης μαθημάτων!</h1>
            <Link to='/loggedin' className="oristikopoihsh-button">Επιστροφή στην αρχική</Link>
        </div>
    );

}

export default Oristikopoihsh;