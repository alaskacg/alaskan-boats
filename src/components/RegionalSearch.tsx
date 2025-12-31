import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 25+ Alaska boat selling locations organized by region
export const alaskaBoatLocations = {
  "Southcentral Alaska": [
    { name: "Anchorage", slug: "anchorage", popular: true },
    { name: "Seward", slug: "seward", popular: true },
    { name: "Homer", slug: "homer", popular: true },
    { name: "Kenai", slug: "kenai", popular: true },
    { name: "Soldotna", slug: "soldotna", popular: true },
    { name: "Valdez", slug: "valdez", popular: false },
    { name: "Cordova", slug: "cordova", popular: false },
    { name: "Whittier", slug: "whittier", popular: false },
    { name: "Wasilla", slug: "wasilla", popular: true },
    { name: "Palmer", slug: "palmer", popular: false },
  ],
  "Southeast Alaska": [
    { name: "Juneau", slug: "juneau", popular: true },
    { name: "Ketchikan", slug: "ketchikan", popular: true },
    { name: "Sitka", slug: "sitka", popular: true },
    { name: "Wrangell", slug: "wrangell", popular: false },
    { name: "Petersburg", slug: "petersburg", popular: false },
    { name: "Haines", slug: "haines", popular: false },
    { name: "Skagway", slug: "skagway", popular: false },
  ],
  "Interior Alaska": [
    { name: "Fairbanks", slug: "fairbanks", popular: true },
    { name: "Nenana", slug: "nenana", popular: false },
    { name: "Delta Junction", slug: "delta-junction", popular: false },
    { name: "Tok", slug: "tok", popular: false },
  ],
  "Southwest Alaska": [
    { name: "Kodiak", slug: "kodiak", popular: true },
    { name: "Dillingham", slug: "dillingham", popular: true },
    { name: "King Salmon", slug: "king-salmon", popular: false },
    { name: "Naknek", slug: "naknek", popular: false },
    { name: "Bethel", slug: "bethel", popular: false },
  ],
  "Western Alaska": [
    { name: "Nome", slug: "nome", popular: false },
    { name: "Kotzebue", slug: "kotzebue", popular: false },
  ],
  "North Slope": [
    { name: "Barrow/Utqiagvik", slug: "barrow", popular: false },
    { name: "Prudhoe Bay", slug: "prudhoe-bay", popular: false },
  ],
};

const RegionalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const allLocations = Object.entries(alaskaBoatLocations).flatMap(([region, locations]) =>
    locations.map(loc => ({ ...loc, region }))
  );

  const filteredLocations = searchTerm
    ? allLocations.filter(loc => 
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.region.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allLocations;

  const popularLocations = allLocations.filter(loc => loc.popular);

  return (
    <div className="relative">
      <Button
        variant="glass"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="group gap-2"
      >
        <MapPin className="w-4 h-4 text-primary" />
        Search by Location
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[400px] max-h-[500px] bg-card border border-border rounded-xl shadow-elevated overflow-hidden z-50"
          >
            {/* Search input */}
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search 30+ Alaska locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="overflow-y-auto max-h-[400px] p-3">
              {!searchTerm && (
                <>
                  {/* Popular locations */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Popular Locations
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {popularLocations.slice(0, 8).map((loc) => (
                        <Link
                          key={loc.slug}
                          to={`/browse?region=${loc.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <MapPin className="w-3 h-3 text-primary" />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {loc.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-3">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      All Regions
                    </h4>
                  </div>
                </>
              )}

              {/* Regions and locations */}
              {Object.entries(alaskaBoatLocations).map(([region, locations]) => {
                const regionLocations = searchTerm
                  ? locations.filter(loc => 
                      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                  : locations;

                if (regionLocations.length === 0) return null;

                return (
                  <div key={region} className="mb-3">
                    <button
                      onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                    >
                      <span className="text-sm font-medium text-foreground">{region}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          selectedRegion === region || searchTerm ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {(selectedRegion === region || searchTerm) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 grid grid-cols-2 gap-1 mt-1">
                            {regionLocations.map((loc) => (
                              <Link
                                key={loc.slug}
                                to={`/browse?region=${loc.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                              >
                                <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                  {loc.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* View all link */}
            <div className="p-3 border-t border-border bg-secondary/30">
              <Link
                to="/browse"
                onClick={() => setIsOpen(false)}
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all listings across Alaska →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </div>
  );
};

export default RegionalSearch;
