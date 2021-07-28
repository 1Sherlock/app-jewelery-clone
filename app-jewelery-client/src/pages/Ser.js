import React, {useEffect} from 'react';
import Footer from "../components/Footer";
import {connect} from "react-redux";
import {sertification} from "../redux/actions/SerAction";
import {API_PATH} from "../tools/constants";

const Ser = (props) => {


    useEffect(() => {
        props.sertification(props.match.params.id);
    }, [])


    return (
        <div className="ser">
            <div className="serBack">
                <div className="container">
                    <div className="sub-title">
                        <h1>Diamond Certificate</h1>
                    </div>
                    <div className="title mt-5">
                        <div></div>
                        <h2>Информация об изделии</h2>
                        <div></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={API_PATH + "file/get/" + props.data.photo} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>ID</h3>
                                        <div className="stChild">
                                            <span>{props.data.serial}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Item</h3>
                                        <div className="stChild">
                                            <span>{props.data.name}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Metal</h3>
                                        <div className="stChild">
                                            <span>{props.data.metal} </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>Date</h3>
                                        <div className="stChild">
                                            <span>{props.data.date?.slice(0, 10)}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Total weight, g</h3>
                                        <div className="stChild">
                                            <span>{props.data.totalWeight}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Hall mark</h3>
                                        <div className="stChild">
                                            <span>{props.data.hallMark}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="characters">
                <div className="container">
                    <div className="title mt-5">
                        <div></div>

                        <h2>Характеристики вставок</h2>
                        <div></div>
                    </div>

                    <div className="row">


                        {/*for   characteristics */}


                        {
                            props.data.diamonds?.map(item => (

                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>Diamond</h3>
                                        <div className="stChild">
                                            <span>{item.diamond + " ct"}</span>
                                        </div>
                                        <h6>таблица</h6>
                                    </div>
                                    {
                                        item.characteristics?.map(item2 => (
                                            <div className="row">

                                                <div className="st w-100 pl-3">

                                                    <h3>{item2.name}</h3>

                                                    <div className="row w-100  ">
                                                        {item2.valueOne ?
                                                            <div className={`col-${item2.valueTwo ? "6" : "12"} p-3`}>
                                                                <div className="stChild">
                                                                    <span>{item2.valueOne}</span>
                                                                </div>
                                                            </div> : ""
                                                        }
                                                        {item2.valueTwo ?
                                                            <div className="col-6 p-3">
                                                                <div className="stChild">
                                                                    <span>{item2.valueTwo}</span>
                                                                </div>
                                                            </div> : ""
                                                        }
                                                    </div>
                                                    <h6>таблица</h6>
                                                </div>
                                            </div>

                                        ))
                                    }


                                    {/*<div className="st">*/}
                                    {/*    <h3>Clarity scale</h3>*/}
                                    {/*    <div className="stChild">*/}
                                    {/*        <span>VVVV</span>*/}
                                    {/*    </div>*/}
                                    {/*    <h6>таблица</h6>*/}
                                    {/*</div>*/}


                                </div>
                            ))
                        }


                        <div className="row w-100 ">


                            <div className="col-md-6 ">
                                <div className="st pl-3">
                                    <h3>Комментарий</h3>
                                    <div className="stChildT">
                                        <span>VVVV</span>
                                    </div>
                                    <h6>таблица</h6>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="st pr-5">
                                    <h3>Эксперт-геммолог</h3>
                                    <div className="stChildB">
                                        <span>{props.data.expertFirstName?.substr(0, 1)}. {props.data.expertLastName}</span>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>


            <Footer/>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {

        data: state.serData.data,

    }
}
export default connect(mapStateToProps, {sertification})(Ser);