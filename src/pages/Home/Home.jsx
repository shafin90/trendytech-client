import { useContext } from "react";
import LogoContainer from "../../components/LogoContainer/LogoContainer";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import BannerPartition from "../../components/BannerPartition/BannerPartition";


const Home = () => {
    // Recieving state and function from AuthProvider component
    const {theme} = useContext(authContext);
    
    return (
        <div className={theme?" bg-white overflow-x-hidden":" bg-black overflow-x-hidden"}>
            <TopNavBar></TopNavBar>
            <LogoContainer></LogoContainer>
            <MainNavigation></MainNavigation>
            <BannerPartition></BannerPartition>
        </div>
    );
};

export default Home;