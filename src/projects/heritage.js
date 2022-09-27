import "./projects.css"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Heritage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Heritage | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/heritage/perkins-house-museum"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240817/consult_pinto/perkins_vbkf5s.jpg" 
                    alt="Perkins House Museum - PINTO Engineering"/>
                    <h3>Perkins House Museum, Liverpool, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/st-john-anglican-church"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240840/consult_pinto/SJChurch_fzx52h.jpg" 
                    alt="St John's Anglican Church Restoration - PINTO Engineering"/>
                    <h3>St John’s Anglican Church Restoration, Lunenburg, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/morris-street"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240808/consult_pinto/morris_gjpzoq.jpg" 
                    alt="Morris Street Renovation - PINTO Engineering"/>
                    <h3>5247 Morris Street Renovation, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/st-george-anglican-church"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240828/consult_pinto/st_george_zpv8jn.jpg" 
                    alt="St George Anglican Church - PINTO Engineering"/>
                    <h3>St. Georges Anglican Church Restoration, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/uniacke-estate-museum"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240846/consult_pinto/uniacke_zegxym.jpg" 
                    alt="Uniacke Estate Museum - PINTO Engineering"/>
                    <h3>Uniacke Estate Museum, Mt. Uniacke, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Heritage;