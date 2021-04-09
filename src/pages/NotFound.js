import error from "./404Error.jpg";
import "./NotFound.css";

const NotFound = () => {
    return (
        <section id="NotFound">
            <div className="overlay"></div>
            <div className="image"><img src={error}/></div>
        </section>
    )
}

export default NotFound;