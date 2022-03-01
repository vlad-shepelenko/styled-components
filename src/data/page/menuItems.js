import {
    chat,
    darkDashboard,
    darkDocument,
    darkLogout,
    darkOrder,
    darkProduct,
    darkSettings,
    dashboard,
    document,
    logout,
    order,
    product,
    setting,
  } from "../../assets";

const menuItems = [
    { id: 1, itemName: "Dashboard", itemLogo: dashboard, darkLogo: darkDashboard},
    { id: 2, itemName: "Product", itemLogo: product, darkLogo: darkProduct},
    { id: 3, itemName: "Order", itemLogo: order, darkLogo: darkOrder},
    { id: 4, itemName: "Chat", itemLogo: chat, darkLogo: chat},
    { id: 5, itemName: "Document", itemLogo: document, darkLogo: darkDocument},
    { id: 6, itemName: "Setting", itemLogo: setting, darkLogo: darkSettings},
    { id: 7, itemName: "Logout", itemLogo: logout, darkLogo: darkLogout},
  ];

  export default menuItems;