// This is the banner section of homepage of this website

import BannerPartition from "../BannerPartition/BannerPartition";

const Banner = () => {
    return (
        <div className=" flex justify-between items-center mb-28">
            {/* first 1/3 part */}
            <BannerPartition
                img="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                width='50vw'
                height="40vw"
                heading="Apple Planning Big Mac Redisgn and Half-Sized Old Mac"
                topic='Computing'
                dateAndPublisherName='Shane Doe - Jan 5, 2021'
                headingSize="40px"

            ></BannerPartition>

            {/* second 1/3 part */}
            <BannerPartition
                img="https://www.melfoster.com/wp-content/uploads/2018/05/high-tech-bg.jpg"
                width='25vw'
                height="40vw"
                heading="Autonomous Driving Startup Attracts Chinese Investor"
                topic='Tech'
                dateAndPublisherName='Shane Doe - Jan 5, 2021'
                headingSize="25px"

            ></BannerPartition>

            {/* Third 1/3 part */}
            <BannerPartition
                img="https://techengage.com/wp-content/uploads/2020/12/hector-martinez-unsplash.jpg"
                width='25vw'
                height="40vw"
                heading="Onboard Cameras Allow Disabled Quadcopters to Fly"
                topic='Gadget'
                dateAndPublisherName='Shane Doe - Jan 5, 2021'
                headingSize="25px"
            ></BannerPartition>
        </div>
    );
};

export default Banner;