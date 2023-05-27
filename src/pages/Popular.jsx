import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import requests from "../apiRequest";

function Popular() {
  return (
    <>
      <Header />
      <CardContainer title={"Popular Now"} url={requests.requestPopular} />
    </>
  );
}

export default Popular;
