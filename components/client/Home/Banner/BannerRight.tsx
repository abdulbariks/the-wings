import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const BannerRight = () => {
    return (
        <div className="  bg-[url('/images/ballet-dancer.jpg')] bg-cover bg-center h-100 w-full md:h-190 lg:h-149 xl:h-159  md:w-full lg:w-129 xl:w-139 flex flex-col justify-end p-2.5">
            {/* <Image src="/images/ballet-dancer.jpg" alt='ballet-dancer.jpg' width={556} height={636}/> */}
            <div className=' bg-white w-full p-4 flex flex-col md:flex-row gap-3  md:items-center justify-between'>
                <div>
                    <p className='text-[#777980]'>Green Light</p>
                    <p className='text-primary font-semibold mt-2'>Paris Opera - Sofia Marin</p>
                </div>
                <Button className="uppercase">Matched</Button>
            </div>
        </div>
    );
};

export default BannerRight;