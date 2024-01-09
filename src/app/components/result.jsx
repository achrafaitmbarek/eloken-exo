import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import CtaButton from './ctaButton';
import Link from 'next/link';
import pumpsData from '../data/data';

function Result() {
    const [suggestedPump, setSuggestedPump] = useState(null);

    useEffect(() => {
        const storageKeys = ['buildingType', 'temperature', 'heatingType', 'consumption'];
        let data = {};
        storageKeys.forEach((key) => {
            const item = localStorage.getItem(key);
            if (item) {
                data[key] = JSON.parse(item);
            }
        });

        const pump = suggestPump(data, pumpsData.productsSuggestions);
        setSuggestedPump(pump);

        localStorage.setItem('suggestedPump',JSON.stringify(pump.title));
    }, []);

    const suggestPump = (userData, pumps) => {
        //just me suggesting a bad basic logic alogrithm to suggest a pump based on the user data hhhh  
        return pumps.find(pump => pump.powerRange.min <= userData.consumption && pump.powerRange.max >= userData.consumption);
    };

    if (!suggestedPump) {
        return <div>Loading...</div>; // in case the suggested pump is not yet set hh 
    }

    return (
        <div className="flex flex-row gap-24 justify-center items-center">
            <div className="flex flex-col gap-8 basis-2/4">
                <div className="text-3xl font-semibold max-w-md">
                    <span className="text-gray-500">Merci pour ces informations !</span>{" "}
                    Nous avons choisi la {suggestedPump.title} pour vous
                </div>
                <div>
                    <Link href="/resultsPage">
                        <CtaButton text={"Terminer"} />
                    </Link>
                </div>
            </div>
            <ProductCard
                className="basis-2/4"
                title={suggestedPump.title}
                pacType={suggestedPump.pacType}
                gasType={suggestedPump.gasType}
                garranty={suggestedPump.warranty}
                isPacSystemModule={suggestedPump.isPacSystemModule}
                price={suggestedPump.price}
                imgUrl={suggestedPump.image}
            />
        </div>
    );
}

export default Result;