import TheLostMind from "../components/TheLostMind/TheLostMind";
import LoreCard from "../features/Cards/LoreCard";


const HomePage = () => {
    return( 
        <>
            <div style={{padding: '4%'}}
            //  style={{ backgroundColor: 'black', opacity: '0.8'}}
             >
                <TheLostMind />
                <br/>
                <LoreCard />
            </div>
        </>
    );
};

export default HomePage;