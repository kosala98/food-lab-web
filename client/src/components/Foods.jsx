export default function Foods({ foods }) {
  return (
    <div>
      <h1>{foods.name}</h1>
      <img src={foods.image} className="img-fluid" />

      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>
          <select>
            {foods.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
