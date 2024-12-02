const Header = () => {
  return (
    <header>
      <div className="bg-blue-600 text-white font-bold flex justify-center items-center w-full p-3">
        <div className="underline">
          <a
            target="_blank"
            href="https://github.com/KHALIDCHOUHANGUJJAR/My-Ecommerce.git"
          >
            Check my new project 💧 MistCSS write React components with 50% less
            code
          </a>
        </div>
      </div>
      <section className="flex items-center justify-center">
        <div className="flex justify-between w-[50vw] p-8">
          <div>
            <h1 className="text-2xl font-bold ">KCpLACEhOLDER</h1>
          </div>
          <ul className="flex items-center justify-center gap-7 font-mono text-xl">
            <li>Guide</li>
            <li>Home</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
