import Banner from "../Components/Banner";
import EventService from "../Components/Cards/EventService";
import Comments from "../Components/Comments/Comments";
import Footer from "../Components/Footer";
import Goalsss from "../Components/Goals/Goalsss";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EventService></EventService>
            <Comments></Comments>
            <Goalsss></Goalsss>
            <Footer></Footer>
        </div>
    );
};

export default Home;