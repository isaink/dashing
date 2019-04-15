import React from 'react';

export const ProviderInfo = props => {
    const renderProviderInfo = () => {
        if (props.providerInformation) {
            return props.providerInformation.map(pInfo => {
                console.log(pInfo)
                return <> {pInfo} </>
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
