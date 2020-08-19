/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import routes from "../Helpers/routes";

import { getProductList, setSort } from "../Actions/products.action";

import "../Stylesheets/MainPage.css";


class MainPage extends Component {
  state = {
    showSortDropdown: false,
    categorySortedBy: "все",
  };

  componentDidMount = () => {
    const { props: { getProductList } } = this;
    getProductList();
  }

  toggleSortDropdown = () => {
    const { state: { showSortDropdown } } = this;
    this.setState({ showSortDropdown: !showSortDropdown });
  }

  goToProductPage = id => () => {
    const { props: { history: { push } } } = this;
    push(`${routes.product}/${id}`);
  }

  sortByCategory = category => () => {
    this.setState({
      categorySortedBy: category,
    });
  }

  setProductsSort = sortDirection => () => {
    const {
      props: {
        setSort,
      },
    } = this;
    setSort(sortDirection);
  }

  render() {
    const {
      state: {
        showSortDropdown,
        categorySortedBy,
      },
      props: {
        productList,
      },
    } = this;
    return (
      <div className="main-page">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className={`sidebar-menu-item ${categorySortedBy === "все" ? "sidebar-menu-item-active" : ""}`} onClick={this.sortByCategory("все")}>ВСЕ</li>
            <li className={`sidebar-menu-item ${categorySortedBy === "плащи" ? "sidebar-menu-item-active" : ""}`} onClick={this.sortByCategory("плащи")}>ПЛАЩИ</li>
            <li className={`sidebar-menu-item ${categorySortedBy === "обувь" ? "sidebar-menu-item-active" : ""}`} onClick={this.sortByCategory("обувь")}>КРОССОВКИ</li>
            <li className={`sidebar-menu-item ${categorySortedBy === "рубашки" ? "sidebar-menu-item-active" : ""}`} onClick={this.sortByCategory("рубашки")}>РУБАШКИ</li>
            <li className={`sidebar-menu-item ${categorySortedBy === "брюки" ? "sidebar-menu-item-active" : ""}`} onClick={this.sortByCategory("брюки")}>БРЮКИ</li>
            <li className="sidebar-menu-item sort-btn" onClick={this.toggleSortDropdown}>
              Сортировать
              <span className={`dropdownOff ${showSortDropdown ? "" : "dropdownOn"}`} />
            </li>
          </ul>
          <div className={`sidebar-dropdown ${showSortDropdown ? "" : "sidebar-dropdown-disabled"}`}>
            <ul className="dropdown-menu">
              <li className="dropdown-menu-item" onClick={this.setProductsSort("DESC")}>От дорогих к дешевым</li>
              <li className="dropdown-menu-item" onClick={this.setProductsSort("ASC")}>От дешевых к дорогим</li>
            </ul>
          </div>
        </aside>
        <main className="main-page-content">
          {productList.length > 0
            ? productList.map(product => (product.category === categorySortedBy || categorySortedBy === "все") && (
            <div className="item-card" onClick={this.goToProductPage(product.id)}>
              <img alt="goods" src={product.image} className="item-card-image" />
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
            )) : "NO DATA"}

        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.ProductList.setProductListReducer,
});

export default connect(mapStateToProps, {
  getProductList,
  setSort,
})(withRouter(MainPage));
