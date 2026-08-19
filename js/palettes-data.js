/**
 * COLOUR PALETTES
 * ================
 * Source of truth: data/palettes.json (kept identical here so the site
 * works even when opened locally without a server, where fetching a
 * local JSON file can be blocked by the browser).
 *
 * To add a new palette: copy a block, give it a unique key and a
 * display "label", and list 4–6 { name, hex } swatches. Roles
 * (background / surface / accent / text colour) are assigned
 * automatically at runtime — see js/main.js → assignPaletteRoles().
 */

const PALETTES = {
  black_brown_granite_beige: {
    label: "Black, Brown & Granite",
    swatches: [
      { name: "Black", hex: "#000000" },
      { name: "Granite", hex: "#B7A7A9" },
      { name: "Brown", hex: "#91766E" },
      { name: "Beige", hex: "#F6ECE3" },
      { name: "White", hex: "#FFFFFF" }
    ]
  },
  cocoa_sage_peach: {
    label: "Cocoa, Sage & Peach",
    swatches: [
      { name: "Cocoa", hex: "#664E44" },
      { name: "Dusty", hex: "#B08B7F" },
      { name: "Peach", hex: "#FFE8D6" },
      { name: "Cream", hex: "#FAF4E5" },
      { name: "Sage", hex: "#C7C3B0" }
    ]
  },
  creme_cinna_chai: {
    label: "Crème, Cinnamon & Chai",
    swatches: [
      { name: "Creme", hex: "#CDC6C3" },
      { name: "Cinna", hex: "#CFB3A9" },
      { name: "Froth", hex: "#F1EEEB" },
      { name: "Latte", hex: "#A09086" },
      { name: "Chai", hex: "#E4D8CB" }
    ]
  },
  navy_teal_skyblue_white: {
    label: "Navy, Teal & Sky Blue",
    swatches: [
      { name: "Navy", hex: "#2F4156" },
      { name: "Teal", hex: "#567C8D" },
      { name: "Sky Blue", hex: "#C8D9E6" },
      { name: "Beige", hex: "#F5EEEB" },
      { name: "White", hex: "#FFFFFF" }
    ]
  },
  shades_of_blue: {
    label: "Shades of Blue",
    swatches: [
      { name: "Cloud Blue", hex: "#EDF4FA" },
      { name: "Calm Ocean", hex: "#8FB6D8" },
      { name: "Powder Sky", hex: "#CFE3F1" },
      { name: "Dusty Denim", hex: "#5F86A6" },
      { name: "Midnight Blue", hex: "#243A5E" }
    ]
  }
};

const DEFAULT_PALETTE_KEY = "navy_teal_skyblue_white";
