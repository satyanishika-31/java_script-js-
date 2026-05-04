import assImage from "../src/assets/ass_10.png";

function Body() {
    return (
        <div className="bg-red-500 flex-1 w-full flex flex-col">

            <div className="flex flex-1 items-center">

                <div className="bg-red-500">
                    <h1 className="text-7xl font-serif text-amber-50 pl-16 pt-16">Down with the state</h1>
                    <p className="text-2xl text-amber-50 p-16 ">Abamdon the left vs right paradigm and adopt new ideas new ideals,<br />where consistency and logic reign supreme</p>

                </div>
                <img className="m-0.5 w-2/6 pl-20" src={assImage} alt="Description" />

            </div>
            <div className="flex flex-1" >
                <div className="bg-red-950 p-10 m-1 ml-0">
                    <h3 className=" text-2xl text-shadow-amber-50  text-amber-50 pb-9">Lorem ipsum dolor sit ?</h3>
                    <p className="text-red-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, soluta optio quos ab eaque nisi unde eos pariatur minus. Soluta ex suscipit nihil voluptatem quos. Neque maiores sunt consequatur corporis accusantium cumque facilis doloremque corrupti aliquid, voluptates debitis quod officiis.</p>

                </div>
                <div className="bg-red-950 p-10 m-1 ">
                    <h3 className="text-2xl text-shadow-amber-50  text-amber-50 pb-9" >Lorem ipsum dolor sit ?</h3>
                    <p className="text-red-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, soluta optio quos ab eaque nisi unde eos pariatur minus. Soluta ex suscipit nihil voluptatem quos. Neque maiores sunt consequatur corporis accusantium cumque facilis doloremque corrupti aliquid, voluptates debitis quod officiis.</p>

                </div>
                <div className="bg-red-950 p-10 m-1 mr-0">
                    <h3 className="text-2xl text-shadow-amber-50  text-amber-50 pb-9">Lorem ipsum dolor sit ?</h3>
                    <p className="text-red-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, soluta optio quos ab eaque nisi unde eos pariatur minus. Soluta ex suscipit nihil voluptatem quos. Neque maiores sunt consequatur corporis accusantium cumque facilis doloremque corrupti aliquid.</p>

                </div>

            </div>


        </div>


    )
}
export default Body