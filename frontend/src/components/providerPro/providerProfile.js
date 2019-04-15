import React from 'react';

export const ProviderInfo = props => {
    console.log(props);
    
    const renderProviderInfo = () => {
        if (props.providerInformation) {

            return props.providerInformation.map(pInfo => {             
            
                return <div key = {pInfo.provider_id}>
                <h2>Provider: {pInfo.providerName}</h2>
                </div>
            });
        } else {
            return (
                <div>
                    Collecting Info
                </div>
            )}
        };
        return (
            <>
            <h1>Provider Information</h1>
             {renderProviderInfo()}
           
            </>
        );
    };
