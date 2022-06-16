import { useState } from "react";
import AdicionaIphoneModal from "components/AdicionaIphoneModal/AdicionaIphoneModal";
import { Iphones } from "../Iphones/Iphones";
import "./Home.css";
import Header from "components/Header/Header";
function Home() {
  const [canShow, setCanShow] = useState(false)
  const [addIphone, setAddIphone] = useState()
  return (
    <div className="Home">
      <Header createIphone={() => setCanShow(true)}/>
      <div className="Home_container">
        <Iphones iphoneCriado={addIphone}/>
        {
          canShow && (<AdicionaIphoneModal closeModal={() => setCanShow(false)}
          onCreateIphone={(iphone) => setAddIphone(iphone)}/>)
        }
      </div>
    </div>
  );
}

export default Home;
