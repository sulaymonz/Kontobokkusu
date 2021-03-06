import React from "react";
import storeLocatorA from "../../../images/Store-Locator-A.png";
import storeLocatorB from "../../../images/Store-Locator-B.png";
import storeLocatorC from "../../../images/Store-Locator-C.png";
import storeLocatorD from "../../../images/Store-Locator-D.png";
import storeLocatorE from "../../../images/Store-Locator-E.png";
import storeLocatorF from "../../../images/Store-Locator-F.png";
import storeLocatorG from "../../../images/Store-Locator-G.png";
import storeLocatorH from "../../../images/Store-Locator-H.png";
import storeLocatorI from "../../../images/Store-Locator-I.png";

const storeLocatorPresets = [
  {
    name: "Store Locator - A",
    image: <img src={storeLocatorA} alt="Store Locator - A" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 7vw 3vh 7vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - B",
    image: <img src={storeLocatorB} alt="Store Locator - B" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 7vw 3vh 7vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      number: {
        margin: { value: "1vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - C",
    image: <img src={storeLocatorC} alt="Store Locator - C" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 7vw 3vh 12vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      marker: {
        margin: { value: "0vh 1vw 0vh -6vw", unit: "" },
        width: { value: 5, unit: "vw" },
        height: { value: 8, unit: "vw" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "12", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - D",
    image: <img src={storeLocatorD} alt="Store Locator - D" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 13vw 3vh 13vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 35, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - E",
    image: <img src={storeLocatorE} alt="Store Locator - E" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 13vw 3vh 13vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      number: {
        margin: { value: "1vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 35, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - F",
    image: <img src={storeLocatorF} alt="Store Locator - F" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "60", unit: "%" },
      },
      slider: {
        padding: { value: "3vh 13vw 3vh 16vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      marker: {
        margin: { value: "0vh 1vw 0vh -6vw", unit: "" },
        width: { value: 5, unit: "vw" },
        height: { value: 8, unit: "vw" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "4", unit: "%" },
        left: { value: "5", unit: "%" },
        width: { value: "90", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "none", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "12", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 35, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - G",
    image: <img src={storeLocatorG} alt="Store Locator - G" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "57", unit: "%" },
      },
      slider: {
        padding: { value: "8vh 13vw 3vh 13vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "60", unit: "%" },
        left: { value: "10", unit: "%" },
        width: { value: "80", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "1px solid #000", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 40, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - H",
    image: <img src={storeLocatorH} alt="Store Locator - H" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "57", unit: "%" },
      },
      slider: {
        padding: { value: "8vh 13vw 3vh 13vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      number: {
        margin: { value: "1vh 0vw 0vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "60", unit: "%" },
        left: { value: "10", unit: "%" },
        width: { value: "80", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "1px solid #000", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "7", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 40, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
  {
    name: "Store Locator - I",
    image: <img src={storeLocatorI} alt="Store Locator - I" />,
    styles: {
      map: {
        top: { value: "0", unit: "%" },
        left: { value: "0", unit: "%" },
        width: { value: "100", unit: "%" },
        height: { value: "57", unit: "%" },
      },
      slider: {
        padding: { value: "8vh 13vw 3vh 16vw", unit: "" },
      },
      name: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 6, unit: "vw" },
        fontWeight: { value: "bold", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "Awesome Store", unit: "" },
      },
      marker: {
        margin: { value: "0vh 1vw 0vh -6vw", unit: "" },
        width: { value: 5, unit: "vw" },
        height: { value: 8, unit: "vw" },
      },
      address: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#000000", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: {
          value: "4034 St George Street, Vancouver, BC, V5T1Z7",
          unit: "",
        },
      },
      phone: {
        margin: { value: "0vh 0vw 1vh 0vw", unit: "" },
        fontSize: { value: 4, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#8dc2dc", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        textTransform: { value: "none", unit: "" },
        caption: { value: "604-879-9831", unit: "" },
      },
      searchBar: {
        top: { value: "60", unit: "%" },
        left: { value: "10", unit: "%" },
        width: { value: "80", unit: "%" },
        height: { value: "4", unit: "vh" },
        border: { value: "1px solid #000", unit: "" },
        borderRadius: { value: "40", unit: "px" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#999999", unit: "" },
        textAlign: { value: "left", unit: "" },
        textTransform: { value: "none", unit: "" },
        buttonAlignRight: { value: "false", unit: "" },
        iconColor: { value: "#6a6a6a", unit: "" },
      },
      more: {
        left: { value: "12", unit: "vw" },
        bottom: { value: "2", unit: "vh" },
        fontSize: { value: 3.5, unit: "vw" },
        fontWeight: { value: "normal", unit: "" },
        color: { value: "#ff6f6f", unit: "" },
        textAlign: { value: "left", unit: "" },
        lineHeight: { value: 1.2, unit: "" },
        width: { value: "auto", unit: "" },
      },
      arrows: {
        top: { value: 40, unit: "%" },
        positionX: { value: 3, unit: "vw" },
        size: { value: 15, unit: "px" },
        lineWidth: { value: 2, unit: "px" },
        color: { value: "#ff6f6f", unit: "" },
      },
    },
  },
];

export default storeLocatorPresets;
