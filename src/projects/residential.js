import "./projects.css"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Residential = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Residential | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/residential/grand-haven"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242605/consult_pinto/grand_w0fw0t.jpg" 
                    alt="Grand Haven Heights - PINTO Engineering"/>
                    <h3>Grand Haven Heights, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/wedgewood-condominium"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242622/consult_pinto/wedgewood_ceesed.jpg" 
                    alt="Wedgewood Condominium - PINTO Engineering"/>
                    <h3>Wedgewood Condominium, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/la-villa"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242611/consult_pinto/la-villa_vnzdkm.jpg" 
                    alt="La Villa Residential Apartment - PINTO Engineering"/>
                    <h3>La Villa Residential Apartments, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/convoy-quay-gardens"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242600/consult_pinto/convoy_ijzdad.jpg" 
                    alt="Convoy Quay Gardens - PINTO Engineering"/>
                    <h3>Convoy Quay Gardens, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/the-waterton"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242617/consult_pinto/waterton2_uh8yod.jpg" 
                    alt="The Waterton - PINTO Engineering"/>
                    <h3>The Waterton, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/armoury-square"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242595/consult_pinto/armoury_iv9npp.jpg" 
                    alt="Armoury Square - PINTO Engineering"/>
                    <h3>Armoury Square, Halifax, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Residential;