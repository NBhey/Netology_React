function ShopItemFunc(prop) {
    prop = prop.prop
    
  return (
    <>
      <div className="main-content">
        <h2>{prop.brand}</h2>
        <h1>{prop.title}</h1>
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
