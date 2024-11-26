function Card({ title, imageURL, price }) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageURL} alt="sneakers"></img>
      <h5>{title}</h5>
      <div className="cardBottom d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
