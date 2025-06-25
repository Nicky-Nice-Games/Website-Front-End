export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-6">
        <div className="w-[95%] mx-auto px-4 flex justify-between items-center">
          <div>
            <img
              src="./images/content-assets/tempLogo.png"
              className="w-24 h-24"
            ></img>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                <img
                  src="./images/instagram-logo.png"
                  className="w-8 h-8 rounded-sm"
                ></img>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                <img src="./images/x-logo.png" className="w-10 h-10"></img>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                <img src="./images/github-logo.png" className="w-10 h-10"></img>
              </div>
            </div>
            <div className="text-4xl">Contact us!</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
