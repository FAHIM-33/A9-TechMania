import Banner from "../Components/Banner";
import EventService from "../Components/Cards/EventService";
import Comments from "../Components/Comments/Comments";
import Footer from "../Components/Footer";
import Goalsss from "../Components/Goals/Goalsss";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-2xl mx-auto">
                <EventService></EventService>
                <Comments></Comments>
                <Goalsss></Goalsss>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;