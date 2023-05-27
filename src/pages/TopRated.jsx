import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import requests from "../apiRequest";

function TopRated() {
  return (
    <>
      <Header />
      <CardContainer title={"Top Rated Movie"} url={requests.requestTopRated} />
    </>
  );
}

export default TopRated;
