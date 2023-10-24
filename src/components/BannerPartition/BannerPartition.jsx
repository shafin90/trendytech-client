// This component contains a background image, a heading, publisher name, date of publish, topic name
//  This component is basically 1/3  partition of banner.

const BannerPartition = ({img,width,height,heading,headingSize,topic,dateAndPublisherName}) => {
   
    return (
        <div
            style={
                {
                    backgroundImage: `url(${img})`,
                    width: width, 
                    height: height
                    // backgroundSize: "110%",
                    // objectFit:"cover",
                    // backgroundRepeat:"no-repeat"
                }
            }
            loading="lazy"
            className=" flex flex-col justify-end items-start p-10  cursor-pointer"
        >
            <p className=" text-white px-2 py-1 bg-red-900 mb-4">{topic}</p>
            <h1 style={{fontSize:headingSize}} className="font-bold  text-white mb-5 leading-tight">{heading}</h1>
            <p className=" text-white">{dateAndPublisherName}</p>
        </div>
    );
};

export default BannerPartition;