function Footer() {
  return (
    <div className=" bottom-0 grid w-full gap-1 grid-rows-[1fr_1fr_1fr_1fr] h-3/10 bg-gray-500">
      <div className="flex items-center justify-center w-full h-full">
        <h2 className="text-xl text-white font-bold">CAFE X</h2>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-start w-full h-full">
          <h3 className="w-1/2 text-lg text-center border-b border-yellow-300 text-white font-bold">
            address
          </h3>
          <h3 className="mt-1 text-center text-white">meydoon vanak</h3>
        </div>
      </div>
       <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-start w-full h-full">
          <h3 className="w-1/2 text-lg text-center border-b border-yellow-300 text-white font-bold">
            contact us
          </h3>
          <h3 className="mt-1 text-center text-white">mobile : 09127812982</h3>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-start w-full h-full">
          <h3 className="w-1/2 text-lg text-center border-b border-yellow-300 text-white font-bold">
            social media
          </h3>
          <div className="flex items-center justify-center w-1/2 gap-4 mt-1 h-1/2">
            <div className="w-1/6 bg-red-500 border rounded-full h-3/4"></div>
            <div className="w-1/6 bg-red-500 border rounded-full h-3/4"></div>
            <div className="w-1/6 bg-red-500 border rounded-full h-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
