import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
   let {menuName, menuItems} = this.props;
    return (
     <div>
      <h1> {menuName} Dinner Menu</h1>
      <div className = "menuItems">
       {menuItems.map((item) => (<MenuItem key = {item.itemId} {...item}/>))}
      </div>
     </div>
   )}
  }