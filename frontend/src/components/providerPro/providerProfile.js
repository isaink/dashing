import React from 'react';

export const ProviderInfo = props => {
    const renderProviderInfo = () => {
        if (props.providerInformation) {
            return props.providerInformation.map(pInfo => {
                
                return <> {pInfo.name} </>
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
