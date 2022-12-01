import React from "react";
import loading from "../../assets/images/loading.gif";

function Loading() {
    return (
        <>
            <div style={{height : "150px"}}></div>
            <div className="container d-flex align-items-center justify-content-center ">
                <img className="loading me-4" src={loading} alt={loading} />
                <h3 style={{ color: "#1876a1" }}>Loading data ...</h3>
            </div>
        </>
    )
}

export default Loading;