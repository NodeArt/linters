/**
 * @fileoverview ESLint plugin from NodeArt
 * @author Roman Ilienko &lt;ilienkors@protonmail.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const base = require("./base");
const react = require("./react");
const typescript = require("./typescript");
const prettier = require("./prettier");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    base,
    react,
    typescript,
    prettier,
  },
};
