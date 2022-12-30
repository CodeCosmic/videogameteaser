import { Container } from "reactstrap";
import AdventureGame from "../components/TheLostMind";


const HomePage = () => {
    return( 
                    //backgroundImage:
        <Container style={{height:"300px", width: "50%", backgroundColor: 'red'}}>
            maybe SubHeader
            <AdventureGame />
        </Container>
    );
};

export default HomePage;