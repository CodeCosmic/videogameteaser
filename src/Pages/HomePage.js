import TheLostMind from "../components/TheLostMind/TheLostMind";
import LoreCard from "../features/Cards/LoreCard";


const HomePage = () => {
    return( 
        <>
            <div style={{padding: '4%'}}>
                <TheLostMind />
                <br/>
                <LoreCard />
            </div>
        </>
    );
};

export default HomePage;