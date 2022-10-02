/** @format */

import SofiaProBoldWof from "../assets/fonts/SofiaPro/Sofia-Pro - Bold.woff";
import SofiaProBold2 from "../assets/fonts/SofiaPro/Sofia-Pro - Bold.woff2";

import SofiaProSemiBoldWof from "../assets/fonts/SofiaPro/Sofia-Pro - SemiBold.woff";
import SofiaProSemiBold2 from "../assets/fonts/SofiaPro/Sofia-Pro - SemiBold.woff2";

import SofiaProRegularWof from "../assets/fonts/SofiaPro/Sofia-Pro - Regular.woff";
import SofiaProRegular2 from "../assets/fonts/SofiaPro/Sofia-Pro - Regular.woff2";

import SofiaProLightWof from "../assets/fonts/SofiaPro/Sofia-Pro - Light.woff";
import SofiaProLight2 from "../assets/fonts/SofiaPro/Sofia-Pro - Light.woff2";

import SofiaProSoftBoldWof from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Bold.woff";
import SofiaProSoftBold2 from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Bold.woff2";

import SofiaProSoftRegularWof from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Regular.woff";
import SofiaProSoftRegular2 from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Regular.woff2";

import SofiaProSoftLightWof from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Light.woff";
import SofiaProSoftLight2 from "../assets/fonts/SofiaProSoft/Sofia-Pro-Soft - Light.woff2";

// SOFIA-PRO FONT

export const SofiaProBold = {
  fontFamily: "Sofia Pro",
  src: `local('Sofia Pro Bold'), local('SofiaProBold'),
      url(${SofiaProBold2}) format('woff2'),
      url(${SofiaProBoldWof}) format('woff')`,

  fontWeight: "bold",
  fontStyle: "normal",
  fontDisplay: "swap",
};

export const SofiaProSemiBold = {
  fontFamily: "Sofia Pro",
  src: `local('Sofia Pro Semi-Bold'), local('SofiaProSemiBold'),
      url(${SofiaProSemiBold2}) format('woff2'),
      url(${SofiaProSemiBoldWof}) format('woff')`,

  fontWeight: 600,
  fontStyle: "normal",
  fontDisplay: "swap",
};

export const SofiaProNormal = {
  fontFamily: "Sofia Pro",
  src: `local('Sofia Pro Regular'), local('SofiaProRegular'),
      url(${SofiaProRegular2}) format('woff2'),
      url(${SofiaProRegularWof}) format('woff')`,

  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
};

export const SofiaProLight = {
  fontFamily: "Sofia Pro",
  src: `local('Sofia Pro Light'), local('SofiaProLight'),
      url(${SofiaProLight2}) format('woff2'),
      url(${SofiaProLightWof}) format('woff')`,

  fontWeight: 300,
  fontStyle: "normal",
  fontDisplay: "swap",
};

// SOFIA-PRO-SOFT FONT

export const SofiaProSoftBold = {
  fontFamily: "Sofia Pro Soft",
  src: `local('Sofia Pro Soft Bold'), local('SofiaProSoftBold'),
      url(${SofiaProSoftBold2}) format('woff2'),
      url(${SofiaProSoftBoldWof}) format('woff')`,

  fontWeight: "bold",
  fontStyle: "normal",
  fontDisplay: "swap",
};

export const SofiaProSoftRegular = {
  fontFamily: "Sofia Pro Soft",
  src: `local('Sofia Pro Soft Regular'), local('SofiaProSoftRegular'),
      url(${SofiaProSoftRegular2}) format('woff2'),
      url(${SofiaProSoftRegularWof}) format('woff')`,

  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
};

export const SofiaProSoftLight = {
  fontFamily: "Sofia Pro Soft",
  src: `local('Sofia Pro Soft Light'), local('SofiaProSoftLight'),
      url(${SofiaProSoftLight2}) format('woff2'),
      url(${SofiaProSoftLightWof}) format('woff')`,

  fontWeight: "300",
  fontStyle: "normal",
  fontDisplay: "swap",
};
