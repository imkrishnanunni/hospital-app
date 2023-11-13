import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className="container-fluid  footer">
                <div className="row">
                    <div className="col-3 ml-3">
                        <h3>Medico Hospital</h3>
                        <hr />
                        <p><b>Founded on 24th January 1985 as a 50 bed hospital in Cochin, Ernakulam Medical Centre (EMC) is now one of the leading healthcare providers in the region.
                            Over a span of three decades, our hospital with 300 beds and a full complement of multi-specialty departments and facilities continue to provide quality healthcare at affordable cost to the community.</b></p>
                    </div>
                    <div className="col-3">
                        <h3>
                            Reach Us
                        </h3>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. Nesciunt voluptates recusandae asperiores nemo est id placeat esse totam praesentium, minus iure laboriosam. Officiis eos voluptates, aut a voluptatem sit deserunt?</p>
                    </div>
                    <div className="col-3"><h3>
                        Quick Links</h3>
                        <hr />
                        <p>emergency contact</p></div>
                    <div className="col-3">
                        <h3>Quick Enquiry
                        </h3>
                        <hr />
                        <div className='col-sm-12'>

                        </div>            </div>
                </div>
            </div>



        </>
    )
}

export default Footer;
