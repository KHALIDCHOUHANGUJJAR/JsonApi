import { text2 } from "../utils/text";

function TxtHolder() {
  return (
    <div className="p-[12vw]">
      <div>
        <h1 className="text-3xl font-bold">Try it</h1>
        <p className="text-xl mt-3">
          Run this code here, in a console or from any site:
        </p>
      </div>

      <div className="bg-blue-950 text-white p-3 mt-12 rounded-xl">
        <pre className="overflow-x-auto  p-6">
          <code>{text2.txt1}</code>
        </pre>
      </div>

      <button className="bg-black text-white py-2 px-4 mt-6 rounded-md hover:bg-gray-700">
        Run script
      </button>

      <div className="bg-blue-950 text-white p-8 mt-6 rounded-xl">
        <p>{`{ }`}</p>
      </div>
      <ul className="p-10">
        <h1 className="text-3xl font-bold p-3">Resources</h1>
        <p className="text-lg ">
          KCplaceHolder comes with a set of 6 common resources:
        </p>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/posts">/posts 100 posts</a>
        </li>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/comments">/comments 500 comments</a>
        </li>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/album">/albums 100 albums</a>
        </li>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/photo">/photos 5000 photos</a>
        </li>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/todos">/todos 200 todos</a>
        </li>
        <li className="underline text-xl font-bold p-5">
          <a target="_blank" href="https://khalidchouhan.vercel.app/user">/users 10 users</a>
        </li>
        <p>
          <span className="tex-xl font-bold">Note </span>: resources have
          relations. For example: posts have many comments, albums have many
          photos, ... see guide for the full list.
        </p>
      </ul>
    </div>
  );
}

export default TxtHolder;
