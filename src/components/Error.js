import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-element">
            <h2>{err.data}</h2>
        </div>
    )
}

export default Error;