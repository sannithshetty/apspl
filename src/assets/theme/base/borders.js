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

/**
 * The base border styles for the Material Kit 2 React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Material Kit 2 React using thie file.
 */

// apspl React Base Styles
import colors from "assets/theme/base/colors";

// apspl React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

export default {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};
