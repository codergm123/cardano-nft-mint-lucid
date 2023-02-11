const Party = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center space-y-12 relative" >
      <img className="visible w-full" src={process.env.PUBLIC_URL + "assets/party.jpg"} data-xblocker="passed" />
    </div>
  );
}

export default Party;