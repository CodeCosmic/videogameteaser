import LoreCard from "../features/Cards/LoreCard";
import TheGameButBetter from "../components/TheGameButBetter/TheGameButBetter";

const HomePage = () => {
    return(
        <>
            <div style={{padding: '4%'}}>
                <TheGameButBetter/>
                <br/>
                <LoreCard />
            </div>
        </>
    );
};

export default HomePage;
