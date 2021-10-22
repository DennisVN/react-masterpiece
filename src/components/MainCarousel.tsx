import React, { useState } from 'react';


export interface IAppProps {
}

export default function App(props: IAppProps) {

  const [image, setImage] = useState<number>(0);

  const handleLeftArrow = () => setImage(image === 0 ? 2 : image - 1)
  const handleRightArrow = () => setImage(image === 2 ? 0 : image + 1)

  return (
    <div className={`mainCarousel min-h-3/4 bg-hero-${image}`}>
      <div className="flex flex-auto justify-between items-center">
        <span className="carouselArrow" onClick={handleLeftArrow}> &lt;</span>
        <span className="carouselArrow" onClick={handleRightArrow}> &gt;</span>
      </div>

      <div className="flex justify-center">
        {[0,1,2].map((item, index)=> <span key={item + ''} className={`text-center m-2  leading-none align-middle w-4 rounded-full ${image === index && 'bg-gray-400'}`}>O</span> )}
      </div>


    </div>
  );
}
