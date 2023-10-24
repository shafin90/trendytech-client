//  The most common component of home page of this website. - Card

import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Card = () => {
    // Recieving state and function from AuthProvider component 
    const {theme} = useContext(authContext);

    const catagory = "Gadgets";
    const img = "https://i.ytimg.com/vi/B4eKcFnarqE/maxresdefault.jpg";
    const width = '30vw'
    const height = '40vw'
    const heading = 'How Tinder Became the App That Defines Online Dating'
    const dateAndPublisherName = 'By Shane DoeJan - jan 14, 2021'
    const article = "To understand the new smart watched and other pro devices…";
    const imgWidth="100%";
    const imgHeight = "50%";
    const textContainerWidth = "100%";
    const textContainerHeight = '50%';

    return (
        <div style={{ width: width, height: height }} className=" flex flex-col justify-start items-center">
            <img className=" mb-3" style={{ width: imgWidth, height: imgHeight }} src={img} alt="" />
            
            {/* textContainer */}
            <div  style={{width:textContainerWidth, height:textContainerHeight}}>
                <p className=" font-bold w-full text-start text-sm text-orange-600">{catagory}</p>
                <h1 className={theme?"mb-2 font-bold text-2xl":"mb-2 font-bold text-2xl text-white"} >{heading}</h1>
                <p className={theme?"mb-4 w-full text-start text-sm text-slate-600":"mb-4 w-full text-start text-sm text-slate-500 "} >{dateAndPublisherName}</p>
                <article className={theme?" text-slate-700":" text-slate-400"} >{article}</article>

            </div>

        </div>
    );
};

export default Card;