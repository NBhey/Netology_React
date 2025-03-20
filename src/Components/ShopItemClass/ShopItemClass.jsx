import React, { Component } from "react";

class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render() {
    return (
      <>
        <div className="main-content">
          <h2>{this.state.brand}</h2>
          <h1>{this.state.title}</h1>
          <h3>{this.state.description}</h3>
          <div className="description">{this.state.descriptionFull}</div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price"> {this.state.price}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    );
  }
}

export default ShopItemClass;
