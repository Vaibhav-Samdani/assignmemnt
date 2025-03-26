import React,  from "react";

import Image from "next/image";





const Gallery: React.FC = () => {
  return (
    <section className="min-h-screen min-w-screen flex overflow-scroll scrollbar-hide">
      <main className="h-full min-w-screen flex ">

      
      <div className="min-w-full h-full  flex">
        <div className="w-1/3 h-full ">
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-1.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-2.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-3.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
          </div>
          
        </div>
        <div className="w-1/3 h-full ">
          <div className="h-2/3 w-full ">
          <Image src="/gallery/gallery-4.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-5.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
          </div>
        </div>
        <div className="w-1/3 h-full ">
        <div className="h-1/3 w-full ">
        <Image src="/gallery/gallery-3.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
        </div>
        <div className="h-2/3 w-full ">
        <Image src="/gallery/gallery-1.jpeg" width={200} height={200} className="w-full object-cover h-full p-2 rounded-2xl" alt="pic-1" />
        </div>
        </div>
      </div>
      

      <div className="min-w-full h-full  flex">
        <div className="w-1/3 h-full ">
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-2.jpeg" width={200} height={200} className="w-full h-full p-2 object-cover rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-5.jpeg" width={200} height={200} className="w-full h-full p-2 object-cover rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-4.jpeg" width={200} height={200} className="w-full h-full p-2 object-cover rounded-2xl" alt="pic-1" />
          </div>
          
        </div>
        <div className="w-1/3 h-full ">
          <div className="h-2/3 w-full ">
          <Image src="/gallery/gallery-1.jpeg" width={200} height={200} className="w-full h-full object-cover p-2 rounded-2xl" alt="pic-1" />
          </div>
          <div className="h-1/3 w-full ">
          <Image src="/gallery/gallery-2.jpeg" width={200} height={200} className="w-full h-full object-cover p-2 rounded-2xl" alt="pic-1" />
          </div>
        </div>
        <div className="w-1/3 h-full ">
        <div className="h-1/3 w-full ">
        <Image src="/gallery/gallery-5.jpeg" width={200} height={200} className="w-full h-full object-cover p-2 rounded-2xl" alt="pic-1" />
        </div>
        <div className="h-2/3 w-full ">
        <Image src="/gallery/gallery-3.jpeg" width={200} height={200} className="w-full h-full p-2 rounded-2xl object-cover" alt="pic-1" />
        </div>
        </div>
      </div>

      
      
      </main>
    </section>
  );
};

export default Gallery;
