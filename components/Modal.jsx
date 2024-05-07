import Image from 'next/image'
import React from 'react';
import {github} from "../constants/assets";

const Modal = ({
    index,
    name,
    description,
    tags,
    image,
    live_site_link,
    source_code_link,
   isOpen,
   toggleEdit
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className=' p-5 rounded-2xl   ease-in w-[100vw] h-[100vh] fixed top-0 left-0 z-40 backdrop-blur-md'>
      <div className="w-[50%] h-full m-auto">
      <div className='relative w-full h-[300px]'>
        <Image
          src={image}
          alt='project_image'
          className='w-full h-full object-fit rounded-2xl mt-3'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md hover:bg-gray-800 cursor-pointer'
          >
            <Image
              src={github}
              alt='source code'
              className='w-[100%] h-[90%] object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-grey font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='my-4 flex flex-wrap gap-2'>
        {tags?.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      <a href={live_site_link} target="_blank" rel="noreferrer" className="mt-6 p-3 blue-text-gradient rounded-md shadow-lg hover:bg-slate-200 bg-white">Visit live site</a>
      <button onClick={toggleEdit} className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none shadow-lg rounded-md ml-8">Close</button>

      </div>
      
    </div>
  )
}

export default Modal
