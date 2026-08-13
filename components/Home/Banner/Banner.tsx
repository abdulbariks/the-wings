import React from 'react';
import BannerLeft from './BannerLeft';

const Banner = () => {
    return (
        <section className='container padding-default flex flex-col-reverse lg:flex-row items-center justify-center  gap-4'>
            <BannerLeft/>
            <div className='flex-1'>banner right</div>
        </section>
    );
};

export default Banner;