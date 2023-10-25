

const ProductCard = ({ imageUrl, title, onClick }) => {
    return (


        <div  className=" mx-auto w-11/12 my-12  overflow-hidden relative  h-60">


            <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "100% 300%", backgroundPosition: 'center', filter: "brightness(0.3)", zIndex:1 }} className=" mx-auto w-full   overflow-hidden absolute  h-full">

            </div>

            <div className=" absolute flex flex-col justify-center items-start w-full h-full px-12" style={{zIndex:2, background:"transparent"}}>
                <div className="p-4">
                    <h3 className="text-6xl  font-bold text-white ">{title}</h3>
                    <button
                        onClick={onClick}
                        className="mt-4 bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-6  focus:outline-none  transition duration-300"
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
