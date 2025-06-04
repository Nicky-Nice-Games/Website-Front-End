

export const Footer  = () => {

    return(
        <>
        
        <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

            <div>
            <div className="w-32 h-16 bg-white"></div>
            </div>

            <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-2">

                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="text-2xl">Contact us!</div>
            </div>
        </div>
        </footer> 
        </>
    );

} 
export default Footer;