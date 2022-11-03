import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type User = {
  name: string;
  github: string;
  linkedin: string;
};

type Props = {
  user: User;
  bio: string;
};

export default function Presentation({ user, bio }: Props) {
  return (
    <div className="w-full h-screen px-2 bg-gray-200 flex items-center justify-center">
      <div className="w-full md:max-w-[600px] mt-6 lg:my-16 p-8 bg-gray-100 rounded-lg shadow-lg">
        <p className="font-semibold text-lg md:text-2xl">
          Hello my name is {user.name}
        </p>
        <h1 className="mt-8 mb-4 px-2 md:text-3xl text-xl font-semibold">
          My history
        </h1>
        <p className="mb-4 py-4 text-lg">{bio}</p>
        <div className="flex gap-4">
          <Link href={user.linkedin} target="_blank">
            <button className="flex items-center justify-center bg-blue-500 px-4 md:px-8 h-8 rounded-lg text-gray-300 text-xl shadow-md outline-none hover:text-blue-800 transition-all duration-300 ease-in-out">
              <AiFillLinkedin />
              Linkedin
            </button>
          </Link>

          <Link href={user.github} target="_blank">
            <button className="flex items-center justify-center bg-blue-500 px-4 md:px-8 h-8 rounded-lg text-gray-300 text-xl shadow-md outline-none hover:text-blue-800 transition-all duration-300 ease-in-out">
              <AiFillGithub />
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const response = await fetch(`http://localhost:3333/api/user/${id}`);
  const user = await response.json();

  const gitUser = user.github.split("https://github.com/");

  const res = await fetch(`https://api.github.com/users/${gitUser[1]}`);
  const { bio } = await res.json();

  return {
    props: { user, bio },
  };
};
