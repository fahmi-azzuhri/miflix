import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import requests from "../apiRequest";

function Upcoming() {
  return (
    <>
      <Header />
      <CardContainer title={"Upcoming Movie"} url={requests.requestUpcoming} />
    </>
  );
}

export default Upcoming;
