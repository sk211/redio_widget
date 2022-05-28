import React from 'react';
import "../Style/Redio.css"

const Redio = () => {
    return (
        <div>


            <div className="main-content">
                <div className="content py-5">
                    <div className='NewOne  '>
                        <div className="radio_card">
                            <div className="header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <button> <img src="./images/back-arrow.png" alt="" /></button>
                                    <button><h4>STATIONS</h4></button>
                                    <button><img src="./images/switch.png" alt="" /></button>
                                </div>
                            </div>

                            <div className="main">
                                <li className='d-flex justify-content-between align-items-end'>
                                    <p>Putin FM</p>
                                    <p>66,6</p>
                                </li>
                                <li className='d-flex justify-content-around align-items-center'>
                                    <img src="./images/plus.png" alt="" id="img1" />
                                    <img src="./images/main.png" alt="" id="img2" />
                                    <img src="./images/minus.png" alt="" id="img3" />
                                </li>
                                <li className='d-flex justify-content-between align-items-end'>
                                    <p>Dribbble FM</p>
                                    <p>102.5</p>
                                </li>
                                <li className='d-flex justify-content-between align-items-end'>
                                    <p>Doge FM</p>
                                    <p>99.4</p>
                                </li>
                            </div>
                            <div className="footer">
                                <div className="text-center">
                                    <h6>CURRENTLY PLAYING</h6>
                                    <h4>Dribbble FM</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Station />

        </div>
    );
}
const Station = () => {
    return (
        <div className="main-content">
            <div className="content py-5">
                <div className='NewTow  '>
                    <div className="radio_card">
                        <div className="header">
                            <div className="d-flex justify-content-between align-items-center">
                                <button> <img src="./images/back-arrow.png" alt="" /></button>
                                <button><h4>STATIONS</h4></button>
                                <button><img src="./images/switch.png" alt="" /></button>
                            </div>
                        </div>

                        <div className="main">
                            <li className='d-flex justify-content-between align-items-end'>
                                <p>Putin FM</p>
                                <p>66,6</p>
                            </li>
                            <li className='d-flex justify-content-between align-items-end'>
                                <p>Dribbble FM</p>
                                <p>101,2</p>
                            </li>
                            <li className='d-flex justify-content-between align-items-end'>
                                <p>Doge FM</p>
                                <p>99,4</p>
                            </li>

                            <li className='d-flex justify-content-between align-items-end'>
                                <p>Ballads FM</p>
                                <p>87,1</p>
                            </li>
                            <li className='d-flex justify-content-between align-items-end'>
                                <p>Maximum FM</p>
                                <p>142,99</p>
                            </li>
                        </div>
                        <div className="footer">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Redio;
