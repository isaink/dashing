import React from 'react';

export const ProviderInfo = props => {
    const renderProviderInfo = () => {
        if (props.providerInformation) {
            return props.providerInformation.map(pInfo => {

                return <> {pInfo.email} </>
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

            <h2>Provider Information</h2>
            {renderProviderInfo()}
            </>
        );
    };
