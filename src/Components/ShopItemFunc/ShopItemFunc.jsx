function ShopItemFunc({brand, title, prop}) {  
  return (
    <>
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{prop.description}</h3>
        <div className="description">{prop.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price"> {prop.price}</div>
            <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
}

export default ShopItemFunc;
