export interface AlaskaRegion {
  value: string;
  label: string;
  region: string;
  boatSales: "high" | "medium" | "low";
}

export const alaskaRegions: AlaskaRegion[] = [
  // Southcentral Alaska - Highest boat sales
  { value: "anchorage", label: "Anchorage", region: "Southcentral", boatSales: "high" },
  { value: "kenai", label: "Kenai Peninsula", region: "Southcentral", boatSales: "high" },
  { value: "homer", label: "Homer", region: "Southcentral", boatSales: "high" },
  { value: "seward", label: "Seward", region: "Southcentral", boatSales: "high" },
  { value: "soldotna", label: "Soldotna", region: "Southcentral", boatSales: "high" },
  { value: "wasilla", label: "Wasilla", region: "Southcentral", boatSales: "high" },
  { value: "palmer", label: "Palmer", region: "Southcentral", boatSales: "medium" },
  { value: "valdez", label: "Valdez", region: "Southcentral", boatSales: "high" },
  { value: "cordova", label: "Cordova", region: "Southcentral", boatSales: "medium" },
  { value: "whittier", label: "Whittier", region: "Southcentral", boatSales: "high" },
  
  // Southeast Alaska - Very high boat activity
  { value: "juneau", label: "Juneau", region: "Southeast", boatSales: "high" },
  { value: "ketchikan", label: "Ketchikan", region: "Southeast", boatSales: "high" },
  { value: "sitka", label: "Sitka", region: "Southeast", boatSales: "high" },
  { value: "petersburg", label: "Petersburg", region: "Southeast", boatSales: "high" },
  { value: "wrangell", label: "Wrangell", region: "Southeast", boatSales: "medium" },
  { value: "haines", label: "Haines", region: "Southeast", boatSales: "medium" },
  { value: "skagway", label: "Skagway", region: "Southeast", boatSales: "low" },
  { value: "yakutat", label: "Yakutat", region: "Southeast", boatSales: "medium" },
  
  // Bristol Bay & Southwest - Commercial fishing hub
  { value: "bristol-bay", label: "Bristol Bay", region: "Southwest", boatSales: "high" },
  { value: "dillingham", label: "Dillingham", region: "Southwest", boatSales: "high" },
  { value: "king-salmon", label: "King Salmon", region: "Southwest", boatSales: "medium" },
  { value: "kodiak", label: "Kodiak", region: "Southwest", boatSales: "high" },
  { value: "dutch-harbor", label: "Dutch Harbor/Unalaska", region: "Southwest", boatSales: "high" },
  { value: "bethel", label: "Bethel", region: "Southwest", boatSales: "medium" },
  
  // Interior Alaska
  { value: "fairbanks", label: "Fairbanks", region: "Interior", boatSales: "medium" },
  { value: "delta-junction", label: "Delta Junction", region: "Interior", boatSales: "low" },
  { value: "tok", label: "Tok", region: "Interior", boatSales: "low" },
  { value: "glennallen", label: "Glennallen", region: "Interior", boatSales: "low" },
  
  // North Slope & Arctic
  { value: "prudhoe-bay", label: "Prudhoe Bay", region: "North Slope", boatSales: "low" },
  { value: "barrow", label: "Utqiaġvik (Barrow)", region: "North Slope", boatSales: "low" },
  { value: "kotzebue", label: "Kotzebue", region: "Northwest", boatSales: "low" },
  { value: "nome", label: "Nome", region: "Northwest", boatSales: "medium" },
  
  // Statewide
  { value: "statewide", label: "Statewide / Multiple Locations", region: "Statewide", boatSales: "high" },
];

export const regionGroups = [
  {
    name: "Southcentral Alaska",
    description: "Highest concentration of boat sales",
    regions: alaskaRegions.filter(r => r.region === "Southcentral"),
  },
  {
    name: "Southeast Alaska",
    description: "Inside Passage & island communities",
    regions: alaskaRegions.filter(r => r.region === "Southeast"),
  },
  {
    name: "Southwest & Bristol Bay",
    description: "Commercial fishing capital",
    regions: alaskaRegions.filter(r => r.region === "Southwest"),
  },
  {
    name: "Interior Alaska",
    description: "River boat country",
    regions: alaskaRegions.filter(r => r.region === "Interior"),
  },
  {
    name: "North & Northwest",
    description: "Arctic waters",
    regions: alaskaRegions.filter(r => ["North Slope", "Northwest"].includes(r.region)),
  },
  {
    name: "Statewide",
    description: "Multiple locations",
    regions: alaskaRegions.filter(r => r.region === "Statewide"),
  },
];

// Flat list for dropdowns
export const regionSelectOptions = alaskaRegions.map(r => ({
  value: r.value,
  label: r.label,
}));

// For browse page filtering
export const browseRegionOptions = [
  { value: "all", label: "All Regions" },
  ...regionSelectOptions,
];
