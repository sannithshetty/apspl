/**
=========================================================
* APSPL React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// apspl React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { white } = colors;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      color: "#9fc9ff",
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: white.main,
      },

      "&.Mui-completed": {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
      opacity: 0.5,
    },
  },
};
