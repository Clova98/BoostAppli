import React, { useState } from "react";

function LandingPage(props) {
    const [searchText, setSearchText] = useState('');
  return (
    <div className="items-stretch bg-gray-100 flex flex-col pb-12">
      <header className="items-stretch bg-indigo-600 flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-stretch flex gap-5 py-5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://images.wakelet.com/resize?id=LrY0Gvuj9JqtoHqknLxuC&h=698&w=768&q=85#"
            className="aspect-[1.09] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full"
            alt="logo"
          />
          <div className="justify-center items-center bg-indigo-600 flex aspect-square flex-col w-8 h-8 px-1 rounded-2xl">
            <img
              loading="lazy"
              src="https://images.wakelet.com/resize?id=AzM_sMmpY8EqsjaP_edk1&h=853&w=768&q=85#"
              className="aspect-square object-contain object-center w-full overflow-hidden"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white bg-opacity-20 flex shrink-0 h-px flex-col max-md:max-w-full" />
        <nav className="justify-between flex w-full gap-5 py-5 items-start max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 px-3 py-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <a
              href="#"
              className="text-white text-sm font-medium leading-5 whitespace-nowrap relative group"
            >
              Dépannage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-indigo-100 text-sm font-medium leading-5 relative group"
            >
              Bon de commande
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-indigo-100 text-sm font-medium leading-5 relative group"
            >
              Réception de travaux
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-indigo-100 text-sm font-medium leading-5 relative group"
            >
              RH
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-indigo-100 text-sm font-medium leading-5 whitespace-nowrap relative group"
            >
              Frais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <form className="items-stretch bg-white bg-opacity-20 self-stretch flex justify-between gap-2 pl-3.5 pr-20 py-2.5 rounded-md max-md:pr-5">
            <img
              loading="lazy"
              src="https://images.wakelet.com/resize?id=LTFAOLwx8xhowioKeW3ae&h=768&w=768&q=85#"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <div className="text-white text-sm leading-5 grow whitespace-nowrap">
              <label htmlFor="search">
              </label>
              <input
                type="text"
                id="search"
                aria-label="Rechercher"
                aria-role="searchbox"
                className="bg-transparent border-none border-white rounded px-4 py-2 focus:outline-none placeholder-white"
                placeholder="Rechercher"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              
            </div>
          </form>
        </nav>
      </header>
      <div className="bg-indigo-600 flex min-h-[125px] w-full flex-col max-md:max-w-full" />
      <div className="self-center z-[1] mt-[-96px] w-full max-w-[1216px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch self-stretch shadow bg-white flex grow flex-col w-full px-5 py-6 rounded-lg max-md:mt-8">
              <div className="border-[color:var(--gray-200,#E5E7EB)] flex shrink-0 h-96 flex-col rounded-lg border-4 border-dashed" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch self-stretch shadow bg-white flex grow flex-col w-full px-5 py-6 rounded-lg max-md:max-w-full max-md:mt-8">
              <div className="border-[color:var(--gray-200,#E5E7EB)] flex shrink-0 h-96 flex-col rounded-lg border-4 border-dashed max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start flex w-full max-w-screen-xl flex-col mt-2 mb-64  pb-8-8 max-md:max-w-full max-md:mb-10 max-md:px-5">
        <div className="bg-gray-200 flex shrink-0 h-px flex-col max-md:max-w-full" />
        <div className="text-gray-500 text-left text-sm leading-5 whitespace-nowrap mt-8 max-md:max-w-full ml-12">
          boostappli © 2020 - 2023
        </div>
      </div>
    </div>
  );
}

export default LandingPage;