import React from "react";
import "./../Css/porfolio.css";
import "../Css/providerProfile.css"

export const ProviderProfile = props => {
  const renderProviderInfo = () => {

    console.log("provider info", props.providerInfo);
    if (props.providerInfo) {
      return (
        <div key={props.providerInfo.provider_id} className="providerInfo">
          <div >
            <img className="provider_avatar" style={{ height: '400'}} src={props.providerInfo.avatar} alt="" />

          </div>
          <div className="contact_info">
            <div className="provider_name">
              <h2>Provider: {props.providerInfo.providername}</h2>
            </div>
            <div className="provider_email">
              <p>Email:{props.providerInfo.email}</p>
            </div>
            <div className="provider_num">
              <p>Phone number:{props.providerInfo.phone_number}</p>
            </div>
            <div className="provider_email">
              <p>Email: {props.providerInfo.email}</p>
            </div>
              <div className='skills'>
                {props.providerInfo.services && props.providerInfo.services.map(service => {
                let skills = service.skills.map(skill => {
                  return (
                    <li>
                      {skill}
                    </li>
                  )
                })
                  return (
                    <>
                    <p>{service.servicesname}</p>
                    <ul>
                      {skills}
                    </ul>
                    </>
                  )
                })}  
              </div>
              </div>
          </div>
        </div>
      );
    } else {

      return <div id="providerInfo">Collecting Info ... </div>;

    }
  };
  
  const renderProviderPortfolio = () => {
    if (props.providerInfo.portfolio) {
     return props.providerInfo.portfolio.map(photo =>{
      return(
        <img className="portfolio_image" src={photo['img']} alt='not here'/>
      )
      })
    }
  };

  return (
    <>

      <h1>Provider Information</h1>

      <div className="render_info">{renderProviderInfo()}</div>
      <div className="render_portfolio">{renderProviderPortfolio()}</div>

    </>
  );
};
