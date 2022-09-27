import "./projects.css"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Mixed = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Mixed-Use Development | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-development/the-trillium"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242002/consult_pinto/trillium_jking7.jpg" 
                    alt="The Trillium - PINTO Engineering"/>
                    <h3>The Trillium, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/saint-lawerence"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241984/consult_pinto/St._Lawrence_bcxwfh.jpg" 
                    alt="Saint Lawrence Place - PINTO Engineering"/>
                    <h3>Saint Lawrence Place, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/mary-ann"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241997/consult_pinto/mary-ann_orwayo.jpg" 
                    alt="Mary Ann Development - PINTO Engineering"/>
                    <h3>Mary Ann Development, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/duckworth-street-metropark"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241978/consult_pinto/duckworth_vwqrme.jpg" 
                    alt="Duckworth Street Metropark - PINTO Engineering"/>
                    <h3>Duckworth Street Metropark, St John's, Newfoundland and Labrador</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/brigadoon-village"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241971/consult_pinto/brigadoon_yewraw.jpg" 
                    alt="Brigadoon Village - PINTO Engineering"/>
                    <h3>Brigadoon Village, South Alton, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/marriott-residence-inn"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241990/consult_pinto/marriott_xdmz0l.jpg" 
                    alt="Marriott Residence Inn - PINTO Engineering"/>
                    <h3>Marriott Residence Inn, Halifax, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Mixed;