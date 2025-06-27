const ProcessPage = () => {
    const photo:string = 'images/placeholder.PNG';

    return(<>
    <main>
        <h1 className="font-black text-4xl m-4 mx-0"> About the Project</h1>

                <div className='flex md:flex-row flex-col items-stretch'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                        Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                    </p>
                    <img src={photo} alt="Photo of the team"
                        className='m-[1rem] md:mt-0 self-center md:self-end md:w-[400px] w-[100%] h-[300px]'
                    />
                </div>
    </main>
    </>)
}
export default ProcessPage
