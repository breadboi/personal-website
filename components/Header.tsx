import React from 'react';
import Image from 'next/image'
import router from 'next/router';

interface Props {
  name: string;
  title: string;
  picture: string;
  resumeLink: string
}

const Profile: React.FC<Props> = ({ name, title, picture, resumeLink }) => {
  return (

    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col text-center">
        <Image
          className="w-64 h-64 rounded-full mb-4"
          src={picture}
          alt={name}
          width={300}
          height={300}
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold mb-2">{name}</h1>
          <p className="text-lg font-medium mb-4">{title}</p>
        </div>

        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            router.push('/');
          }}
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Profile;