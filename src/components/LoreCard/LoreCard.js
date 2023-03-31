import { Card, CardTitle, CardText } from "reactstrap";
import './LoreCard.css'


const LoreCard = () => {
    return (
        <div className="loreContainer">
            <Card className="loreCardStyle">
                    <CardTitle className="cardTitle">Background on the Hat Man</CardTitle>
                    <CardText className="cardBody">'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nec tincidunt praesent semper feugiat. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Odio euismod lacinia at quis risus sed vulputate odio. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Gravida neque convallis a cras semper. In est ante in nibh mauris cursus mattis molestie. Aliquet sagittis id consectetur purus. Morbi blandit cursus risus at ultrices mi. Posuere ac ut consequat semper viverra nam libero justo laoreet.'</CardText>
            </Card>
        </div>
    );
}

export default LoreCard;
