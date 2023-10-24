// This component contains a background image, a heading, publisher name, date of publish, topic name

const BannerPartition = () => {
    const img = "https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    const width = '50vw';
    const height = "40vw";
    const heading = "Apple Planning Big Mac Redisgn and Half-Sized Old Mac"
    const topic = 'computing'
    const dateAndPublisherName = 'Shane Doe - Jan 5, 2021'
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
            className=" flex flex-col justify-end items-start p-10"
        >
            <p className=" text-white px-2 py-1 bg-red-900 mb-4">{topic}</p>
            <h1 className=" font-bold text-5xl text-white mb-5 leading-tight">{heading}</h1>
            <p className=" text-white">{dateAndPublisherName}</p>
        </div>
    );
};

export default BannerPartition;