// This component is 1/3 part of the section that  take place after banner.

import Card from "../Card/Card";

const CardBranch = ({cardCategory}) => {
    
    // const cardCategory = 'Apps';
    const cardBranchWidth = "29vw";

    return (
        <div style={{ width: cardBranchWidth }}>
            <div className=" flex justify-between items-center mb-6">
                {/*Category name */}
                <p className=" text-orange-600 font-bold text-2xl ">{cardCategory}</p>

                {/*Horizontal line after that category name */}
                <div style={{ height: "2px" }} className=" w-10/12  bg-slate-300"></div>
            </div>

            {/* Top card of cardBarnch ===============================================================*/}
            <Card
                catagory="Gadgets"
                img="https://i.ytimg.com/vi/B4eKcFnarqE/maxresdefault.jpg"
                width='100%'
                height='33vw'
                heading='How Tinder Became the App That Defines Online Dating'
                fontSize="24px" // Font size of heading
                dateAndPublisherName='By Shane DoeJan - jan 14, 2021'
                article="To understand the new smart watched and other pro devices…"
                imgWidth="100%"
                imgHeight="50%"
                textContainerWidth="100%"
                textContainerHeight='50%'
                isCol={true} // some times it flex according to row, sometimes column.
                isHeadingAndTextRemoved={false} // Some times, heading and text of this component remain hidden
            ></Card>

            {/* Group of card =====================================================================*/}
            <div className=" w-full h-36 border-b-2 border-slate-200 flex items-center">
                <Card
                    catagory="Gadgets"
                    img="https://i.ytimg.com/vi/B4eKcFnarqE/maxresdefault.jpg"
                    width='100%'
                    height='100%'
                    heading='How Tinder Became the App That Defines Online Dating'
                    fontSize="16px" // fontSize of heading
                    dateAndPublisherName='By Shane DoeJan - jan 14, 2021'
                    article="To understand the new smart watched and other pro devices…"
                    imgWidth="40%"
                    imgHeight="70%"
                    textContainerWidth="57%"
                    textContainerHeight='90%'
                    isCol={false} // some times it flex according to row, sometimes column.
                    isHeadingAndTextRemoved={true} // Some times, heading and text of this component remain hidden
                ></Card>
            </div>


            <div className=" w-full h-36 border-b-2 border-slate-200 flex items-center">
                <Card
                    catagory="Gadgets"
                    img="https://i.ytimg.com/vi/B4eKcFnarqE/maxresdefault.jpg"
                    width='100%'
                    height='100%'
                    heading='How Tinder Became the App That Defines Online Dating'
                    fontSize="16px" // fontSize of heading
                    dateAndPublisherName='By Shane DoeJan - jan 14, 2021'
                    article="To understand the new smart watched and other pro devices…"
                    imgWidth="40%"
                    imgHeight="70%"
                    textContainerWidth="57%"
                    textContainerHeight='90%'
                    isCol={false} // some times it flex according to row, sometimes column.
                    isHeadingAndTextRemoved={true} // Some times, heading and text of this component remain hidden
                ></Card>

            </div>


            <div className=" w-full h-36 border-b-2 border-slate-200 flex items-center">
                <Card
                    catagory="Gadgets"
                    img="https://i.ytimg.com/vi/B4eKcFnarqE/maxresdefault.jpg"
                    width='100%'
                    height='100%'
                    heading='How Tinder Became the App That Defines Online Dating'
                    fontSize="16px" // fontSize of heading
                    dateAndPublisherName='By Shane DoeJan - jan 14, 2021'
                    article="To understand the new smart watched and other pro devices…"
                    imgWidth="40%"
                    imgHeight="70%"
                    textContainerWidth="57%"
                    textContainerHeight='90%'
                    isCol={false} // some times it flex according to row, sometimes column.
                    isHeadingAndTextRemoved={true} // Some times, heading and text of this component remain hidden
                ></Card>
            </div>


        </div>
    );
};

export default CardBranch;