import React from "react";
import './../../Css/profile.css';

// import pic from './../../img/pic_profile.png';
// import pic from './../../img/pic_profile.jpg';
import pared from './../../img/habitacion-pared-salmon.jpg'
import loc from './../../img/location.png';
import check from './../../img/check.png';
// import lines from './../../img/lines_porfolio.jpg';
import not_img from './../../img/notFound.jpg';

export const ProviderProfile = props => {

    const renderProviderInfo = () => {
      if (props.providerInfo) {
        return ( 
            <div className='ctnr_profile' key={props.providerInfo.provider_id}>

              <div className='bg_intro_profile'>
                <img alt='intro_picture' src={pared}  className='intro_pic' style={{width: `400%`}}/>
              </div>
              
              {/* <div >    */}

              <img src={props.providerInfo.avatar} alt='avatar' className='avatar_profile'/>

                <div className='prov_info'>
                  <h5 className='prov_name'>{props.providerInfo.providername} </h5> 
                </div>
                <div className='bg_name'></div>

                {/* <div className='ctnr_contact'> */}
                  <div className='contact_info'>
                  
                    <p>Phone number: </p>
                    <h6>
                    {props.providerInfo.phone_number}
                    </h6>
                    
                    <p>Email:</p>
                    {props.providerInfo.email}
                  {/* </div> */}
                </div>


                <div className='ctnr_porfolio'>
                {/* <img src={lines}/> */}
                    {/* PORFOLIO HERE */}
                </div>

                <div className='loc'>
                  <h5 className='prov_boro'>
                  <img alt='loc' src={loc}  style={{ zIndex: '2', height: '20px'}}/>
                  {props.providerInfo.borough} </h5>
                </div>

                <div className='social_link'>
                  <p>Social media: </p>
                  <a href="https://www.instagram.com/krystamariehair/"> {props.providerInfo.website_link} </a>
                </div>
           
              <div className='ctnr_services'>
                {props.providerInfo.services && props.providerInfo.services.map(service => {
                  let skills = service.skills.map(skill => {
                    return (
                      <>
                        <img alt='intro_picture' src={check} style={{height: '10px'}}/>
                        {'   '} {skill  } {'   '}
                      </>
                    )
                  })
                    return (
                      <>
                      <div className='ctnr_skills'>
                        <p className='srv_name'>{service.servicesname}</p>
                      </div>
                        <div className='inner_skill'>
                          {skills} 
                        </div>
                          
                      </>
                    )
                  })}
                </div>

                <div className='ctnr_porfolio'>
                    { props.providerInfo.portfolio ? props.providerInfo.portfolio.map(photo => { 
                      return(
                        <img className="portfolio_img" src={photo['img']} alt='not here' style={{ height: '200px'}}/> 
                      )
                      })
                      : <>  <img alt='intro_picture' src={not_img}  style={{ objectFit: 'cover',  height: '320px',   transform: 'translateY(-20%)' }}/></>
                    }
                </div>
            </div>
        );
      } else {
        return <div key='1' id='providerInfo'>Collecting Info ... </div>;
      }
    };

  return (
    <>
      {renderProviderInfo()}
    </>
  );
};
