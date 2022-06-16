import { useEffect, useState } from "react";
import AdicionaIphoneModal from "components/AdicionaIphoneModal/AdicionaIphoneModal";
import { Iphones } from "../Iphones/Iphones";
import "./Home.css";
import Header from "components/Header/Header";
import { iphoneService } from "services/iphoneService";

function Home() {
  const [iphones, setIphone] = useState([]);

  const getLista = async () => {
    const response = await iphoneService.getLista();
    setIphone(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  const [canShow, setCanShow] = useState(false);
  return (
    <div className="Home">
      <Header createIphone={() => setCanShow(true)} />
      <div className="Home_container">
        <Iphones iphones={iphones} />
        {canShow && (
          <AdicionaIphoneModal
            getIphones={getLista}
            closeModal={() => setCanShow(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
