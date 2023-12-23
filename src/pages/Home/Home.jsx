import { useContext } from "react";
import LogoContainer from "../../components/LogoContainer/LogoContainer";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Banner from "../../components/Banner/Banner";
import CardBranchContainer from "../../components/CardBranchContainer/CardBranchContainer";
import ProductCard from "../../components/ProductCard/ProductCard";


const Home = () => {
    // Recieving state and function from AuthProvider component
    const { theme, file } = useContext(authContext);

    // Function to navigate user to the specific blog page
    const handleViewMore = () => {
        // Handle the logic to view more about the product here
      };
    return (
        <div className={theme ? " bg-white overflow-x-hidden" : " bg-black overflow-x-hidden"}>
            <TopNavBar></TopNavBar>
            <LogoContainer></LogoContainer>
            <MainNavigation></MainNavigation>
            <Banner></Banner>
            <CardBranchContainer></CardBranchContainer>
            <ProductCard
                imageUrl="https://robots.net/wp-content/uploads/2023/10/how-to-use-sling-tv-on-smart-tv-1697961622.jpg"
                title="Try it, You will love it"
                onClick={handleViewMore}
            ></ProductCard>

            <img src={file} alt="" />
        </div>
    );
};

export default Home;