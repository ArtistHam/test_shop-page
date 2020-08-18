/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import routes from "../Helpers/routes";

import { getProductList } from "../Actions/products.action";

import "../Stylesheets/MainPage.css";


class MainPage extends Component {
  state = {
    showSortDropdown: false,
  };

  componentDidMount = () => {
    const { props: { getProductList } } = this;
    getProductList();
  }

  toggleSortDropdown = () => {
    const { state: { showSortDropdown } } = this;
    this.setState({ showSortDropdown: !showSortDropdown });
  }

  goToProductPage = () => {
    const { props: { history: { push } } } = this;
    push(routes.product);
  }

  render() {
    const {
      state: {
        showSortDropdown,
      },
      props: {
        productList,
      },
    } = this;
    return (
      <div className="main-page">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">ВСЕ</li>
            <li className="sidebar-menu-item">ПЛАЩИ</li>
            <li className="sidebar-menu-item">КРОССОВКИ</li>
            <li className="sidebar-menu-item">РУБАШКИ</li>
            <li className="sidebar-menu-item">БРЮКИ</li>
            <li className="sidebar-menu-item sort-btn" onClick={this.toggleSortDropdown}>
              Сортировать
              <span className={`dropdownOff ${showSortDropdown ? "" : "dropdownOn"}`} />
            </li>
          </ul>
          <div className={`sidebar-dropdown ${showSortDropdown ? "" : "sidebar-dropdown-disabled"}`}>
            <ul className="dropdown-menu">
              <li className="dropdown-menu-item">От дорогих к дешевым</li>
              <li className="dropdown-menu-item">От дешевых к дорогим</li>
              <li className="dropdown-menu-item">Популярные</li>
              <li className="dropdown-menu-item">Новые</li>
            </ul>
          </div>
        </aside>
        <main className="main-page-content">
          {productList.map(product => (
            <div className="item-card" onClick={this.goToProductPage}>
              <img src={product.image} className="item-card-image" />
              <div className="item-card-description">
                <div className="item-card-description-category">{product.category}</div>
                <div className="item-card-description-name">{product.name}</div>
                <div className="item-card-description-price">{product.price}</div>
                <div className="item-card-description-stock">
                  на складе:
                  {" "}
                  {product.in_stock}
                </div>
              </div>
            </div>
          ))}


          {/* <div className="item-card" onClick={this.goToProductPage}>
            <div className="item-card-image" />
            <div className="item-card-description">
              <div className="item-card-description-category">РУБАШКИ</div>
              <div className="item-card-description-name">Рубашка с принтом</div>
              <div className="item-card-description-price">$170</div>
              <div className="item-card-description-stock">на складе: 11</div>
            </div>
          </div>

          <div className="item-card" onClick={this.goToProductPage}>
            <div className="item-card-image" />
            <div className="item-card-description">
              <div className="item-card-description-category">ОБУВЬ</div>
              <div className="item-card-description-name">Кроссовки «Kaiwa» Y3 x Adidas</div>
              <div className="item-card-description-price">$240</div>
              <div className="item-card-description-stock">на складе: 134</div>
            </div>
          </div>

          <div className="item-card" onClick={this.goToProductPage}>
            <div className="item-card-image" />
            <div className="item-card-description">
              <div className="item-card-description-category">РУБАШКИ</div>
              <div className="item-card-description-name">куртка-рубашка с карманами</div>
              <div className="item-card-description-price">$1240</div>
              <div className="item-card-description-stock">на складе: 11</div>
            </div>
          </div>

          <div className="item-card" onClick={this.goToProductPage}>
            <div className="item-card-image" />
            <div className="item-card-description">
              <div className="item-card-description-category">РУБАШКИ</div>
              <div className="item-card-description-name">Кроссовки с пряжками</div>
              <div className="item-card-description-price">$390</div>
              <div className="item-card-description-stock">на складе: 11</div>
            </div>
          </div>

          <div className="item-card" onClick={this.goToProductPage}>
            <div className="item-card-image" />
            <div className="item-card-description">
              <div className="item-card-description-category">РУБАШКИ</div>
              <div className="item-card-description-name">Укороченные зауженные брюки</div>
              <div className="item-card-description-price">$647</div>
              <div className="item-card-description-stock">на складе: 7</div>
            </div>
          </div> */}

        </main>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({
  productList: state.ProductList,
});

export default connect(mapStateToProps, {
  getProductList,
})(withRouter(MainPage));
