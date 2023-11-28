import Foods from "../components/Foods";
import fooddata from "../fooddata";

const HomeScreen = () => {
  return (
    <div>
      <div className="row">
        {fooddata.map((foods) => {
          return (
            <div className="col-md-4 d-flex justify-content-center">
              <div>
                <Foods foods={foods} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
