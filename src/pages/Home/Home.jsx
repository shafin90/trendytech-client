import { useContext } from "react";
import LogoContainer from "../../components/LogoContainer/LogoContainer";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { authContext } from "../../components/AuthProvider/AuthProvider";


const Home = () => {
    // Recieving state and function from AuthProvider component
    const {theme} = useContext(authContext);
    
    return (
        <div className={theme?" bg-white":" bg-black"}>
            <TopNavBar></TopNavBar>
            <LogoContainer></LogoContainer>
        </div>
    );
};

export default Home;