import React, { Component } from 'react';

export default class ExpenseIcon extends Component {
  iconFrom(category) {
    switch (category) {
      case "Courses":
        return "local_grocery_store";
      case "Repas":
        return "local_dining";
      case "Loisir":
        return "local_library";
      case "Loyer":
        return "home";
      case "Maison":
        return "image";
      case "Shopping":
        return "local_mall";
      case "Santé":
        return "local_hospital";
      case "Train":
        return "directions_transit";
      case "Cadeaux":
        return "card_giftcard";
      default:
        return "attach_money";
    }
  }

  render() {
    return (
      <span
        className={`mdc-list-item__start-detail ${this.props.category}`}
        role="presentation"
      >
        <i className="material-icons" aria-hidden="true">
          {this.iconFrom(this.props.category)}
        </i>
      </span>
    );
  }
}
