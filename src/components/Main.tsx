import Home from './elements/Home';
import Mint from './elements/Mint';
import NFTFlow from './elements/NFTFlow';
import Mission from './elements/Mission';
import Party from './elements/Party';
//import Rare from './elements/Rare';
import Roadmap from './elements/Roadmap';
import Super from './elements/Super';
// import Team from './elements/Team';
// import Faq from './elements/Faq';

const Main = ({IsConnected, lucid, setIsMinting, setAlertState}: any) => {
  return (
    <main className="flex-1 container py-0 mx-auto font-body">
      <div>
        <div className="flex flex-col items-center justify-center">
          <Home />
          <Mint IsConnected = {IsConnected} lucid = {lucid} setIsMinting = {setIsMinting} setAlertState = {setAlertState} />
          <NFTFlow />
          <Mission />
          {/* <Rare /> */}
          <Party />
          <Roadmap />
          <Super />
          {/* <Team /> */}
          {/* <Faq /> */}

        </div>
      </div>
    </main>
  );
}

export default Main;