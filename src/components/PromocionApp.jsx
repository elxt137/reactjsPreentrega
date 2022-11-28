import React from "react";

const PromocionApp = () => {
    return (
        <div className="container-fluid  publicidadApp">
                    <div className="container pt-5">
                        <div className="row ">
                            <div className="col-md-6 text-end">
                                <img src={"images/serpiente.jpg"} alt={"cuadroserpiente"} width={310} />
                            </div>
                            <div className="col-md-6 d-flex align-items-end">
                                <div>   
                                    <h3>Cuadro de Serpiente en stock! llevalo con un 10% de descuento </h3>
                                    <p>
                                        <a href="www.instagram.com/cinotag" target={"_blank"}> <img src={"images/logo.jpeg"} alt="Facebook" width={32} /> </a>
                                        <a href="www.instagram.com/cinotag" target={"_blank"}> <img src={"images/logo.jpeg"} alt="Facebook" width={32} /> </a>
                                    
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>    
        </div>
    )

}

export default PromocionApp;