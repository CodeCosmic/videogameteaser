import LoreCard from '../components/LoreCard/LoreCard'
import TheGameButBetter from "../components/TheGameButBetter/TheGameButBetter";

const HomePage = () => {
    return(
        <>
            <div style={{padding: '20px'}}>
                <TheGameButBetter/>
                <br/>
                <LoreCard />
            </div>
        </>
    );
};

export default HomePage;
