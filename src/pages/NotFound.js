import "./NotFound.css";

const NotFound = () => {
    return (
        <section id="NotFound">
            <div className="overlay"></div>
            <div className="image"><h1>404</h1> <h4>Not Found</h4> <p>Looks like this page does not exist.</p></div>
        </section>
    )
}

export default NotFound;