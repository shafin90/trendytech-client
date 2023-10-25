//  The most common component of home page of this website. - Card

import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import './Card.css';


const Card = ({ fontSize, isHeadingAndTextRemoved, isCol, catagory, img, width, height, heading, dateAndPublisherName, article, imgWidth, imgHeight, textContainerWidth, textContainerHeight }) => {

    // Recieving state and function from AuthProvider component 
    const { theme } = useContext(authContext);

    return (
        <div
            style={{ width: width, height: height }}
            // when user hover the cards, bg will be changed. bg-color will be varies with the theme
            className={isCol ?
                " flex flex-col justify-start items-center cursor-pointer "
                :
                theme ? " flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-all" :
                    " flex justify-between items-center cursor-pointer hover:bg-slate-900 transition-all"

            }
        >
            <img className=" mb-3 image-hover-effect" style={{ width: imgWidth, height: imgHeight }} src={img} alt="" />

            {/* textContainer */}
            <div style={{ width: textContainerWidth, height: textContainerHeight }}>
                <p style={{ display: isHeadingAndTextRemoved && "none" }} className=" font-bold w-full text-start text-sm text-orange-600">{catagory}</p>
                <h1 style={{ fontSize: fontSize }} className={theme ? "mb-2 font-bold " : "mb-2 font-bold  text-white"} >{heading}</h1>
                <p className={theme ? "mb-4 w-full text-start text-sm text-slate-600" : "mb-4 w-full text-start text-sm text-slate-500 "} >{dateAndPublisherName}</p>
                <article style={{ display: isHeadingAndTextRemoved && "none" }} className={theme ? " text-slate-700" : " text-slate-400"} >{article}</article>
            </div>
        </div>
    );
};

export default Card;