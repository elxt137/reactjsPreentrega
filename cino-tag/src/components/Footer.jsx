import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid">
                    <div className="container py-5">
                        <hr/>
                        <div className="row ">
                            <div className="col-md-6">
                                <img src={"/images/logo.jpeg"} width={40} alt="" />


                            </div>

                            <div className="col-md-6 text-end">
                               <p> 
                                
                                
                                
                                <a href={"www.instagram.com/cinotag"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/instagram.svg"} alt="Facebook" width={42} /></a>
                                <a href={"www.instagram.com/cinotag"} target={"_blank"} className="me-3" rel="noreferrer" ><img src={"/images/twitter.svg"} alt="Facebook" width={42} /></a>
                                <a href={"www.instagram.com/cinotag"} target={"_blank"}className="me-3" rel="noreferrer" ><img src={"/images/facebook.svg"} alt="Facebook" width={42} /></a>
                                
                                
                                
                                
                                </p>
                                
                            </div>   
                        
                        </div>
                    </div>    
        
        </div>
    )
}

export default Footer;