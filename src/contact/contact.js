import React, {useEffect, useState} from "react";
import './contact.css';
import contact from './contact-photo.jpeg';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState(false);

    const mapStyles = {
        height: "340px",
        width: "100%",
        color:"black"};

    const defaultCenter = {
        lat: 44.655347296233124, lng: -63.63037991154172
    }

    return (
        <section id="contact">
            <div className="overlay"></div>
            <div className="contact-header">
                <h1>Contact PINTO</h1>
            </div>
            <div className="contact-main">
                <div className="company-info">
                    <div className="text">
                    <h2>The team at PINTO looks forward to working with you on your next project.</h2>
                    <p>Please contact us using any of the methods below. For additional information, please visit and 
                        follow our company <a href="https://www.linkedin.com/company/malcolm-pinto-engineering-ltd-" rel="nofollow">LinkedIn page.</a></p>
                    </div>
                    <img src={contact} alt=""/>
                </div>
                <div className="company-contact">
                    <div className="company-box" id="halifax">
                        <div>
                            <h2>Halifax</h2>
                            <ul>
                                <li><i class="fas fa-phone"></i> (902) 420-9800</li>
                                <li><i class="fas fa-fax"></i> (902) 484-7288</li>
                                <li><i class="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                            </ul>
                            <p>
                            Suite 401-3480 Joseph Howe Drive, <br />
                            Halifax, Nova Scotia B3L 4H7<br/>
                            P.O. Box 2555
                            </p>
                        </div>
                    </div>
                    <div id="map">
                        <div className="map">
                            <LoadScript googleMapsApiKey=''>
                                <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={13}
                                center={defaultCenter}>
                                    <Marker onClick={() => setSelected(true)}key={"Atlantic Resources"} position={{ lat: defaultCenter.lat, lng: defaultCenter.lng }} />
                                    {selected ? 
                                        <InfoWindow position={{ lat: defaultCenter.lat, lng: defaultCenter.lng }} 
                                        clickable={true}
                                        onCloseClick={() => setSelected(false)}                  
                                        >
                                            <p><b>Pinto Engineering</b> <br/>
                                            Suite 401-3480 Joseph Howe Drive, <br />
                                            Halifax, NS B3L 4H7</p>
                                        </InfoWindow> : ""
                                    }
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>
                    <div className="company-box" id="stjohn">
                        <div>
                            <h2>St John's</h2>
                            <ul>
                                <li><i class="fas fa-phone"></i> (709) 700-2139</li>
                                <li><i class="fas fa-fax"></i> (902) 484-7288</li>
                                <li><i class="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                            </ul>
                            <p>St. John's, <br/> Newfoundland and Labrador, <br/>Canada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;