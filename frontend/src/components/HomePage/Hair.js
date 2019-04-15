import React from "react";
import './../../Css/provider.css';

export const Hair = props => {
  const renderProviders = () => {
    if (props.hairProviders) {
      return props.hairProviders.map((hairP) => {
        return <> 
        <div key={hairP.provider_id} className='box_provider' >
          <div className='hair_avatar box'> 
            <img 
                alt='avatar' 
                className='pic_hair content' 
                src={hairP.avatar} 
                style={{ height:'200px'}}
            />  
            <span className='provider_name'>
              {hairP.name}
            </span>

            <div className='info_provider' >
              {hairP.email} <br/>
              {hairP.phone_number} <br/>
              {hairP.borough} <br/>
              {hairP.website_link}
            </div>
            
          </div>
        </div>
        </>;
      });
    } else {
      return <div className="lds-heart"><div></div></div>;
    }
  };
  return (
    <>
      {renderProviders()}
    </>
  );
};
