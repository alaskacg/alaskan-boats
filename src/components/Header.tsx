import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import BetaBanner from "@/components/BetaBanner";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import TraditionalAnchorLogo from "@/components/TraditionalAnchorLogo";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const boatCategories = [
  { name: "Fishing Boats", href: "/browse?category=fishing", description: "Commercial & sport fishing vessels" },
  { name: "Cabin Cruisers", href: "/browse?category=cabin-cruisers", description: "Overnight capable vessels" },
  { name: "Skiffs & Jon Boats", href: "/browse?category=skiffs", description: "Small aluminum & fiberglass boats" },
  { name: "Jet Boats", href: "/browse?category=jet-boats", description: "River runners & shallow drafts" },
  { name: "Sailboats", href: "/browse?category=sailboats", description: "Sailing vessels of all sizes" },
  { name: "Kayaks & Canoes", href: "/browse?category=kayaks", description: "Paddle craft & inflatables" },
  { name: "Pontoons", href: "/browse?category=pontoons", description: "Party & leisure boats" },
  { name: "PWC / Jet Skis", href: "/browse?category=pwc", description: "Personal watercraft" },
];

const regions = [
  { name: "Southcentral Alaska", href: "/browse?region=southcentral", description: "Anchorage, Kenai, Homer" },
  { name: "Southeast Alaska", href: "/browse?region=southeast", description: "Juneau, Ketchikan, Sitka" },
  { name: "Interior Alaska", href: "/browse?region=interior", description: "Fairbanks, river boats" },
  { name: "Southwest Alaska", href: "/browse?region=southwest", description: "Bristol Bay, Kodiak" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <BetaBanner />
      <div className="bg-glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <TraditionalAnchorLogo className="w-8 h-10" />
              <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Alaskan Boats
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm bg-transparent">Boat Types</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                        {boatCategories.map((category) => (
                          <li key={category.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={category.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{category.name}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm bg-transparent">Regions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                        {regions.map((region) => (
                          <li key={region.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={region.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{region.name}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                  {region.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Browse All
              </Link>
              
              <ThemeToggle />

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/my-listings" className="cursor-pointer text-sm">My Listings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/post-listing" className="cursor-pointer text-sm">Sell Your Boat</Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/admin" className="cursor-pointer text-sm">Admin Dashboard</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive text-sm">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Sign In</Button>
                  </Link>
                  <Link to="/post-listing">
                    <Button variant="aurora" size="sm">
                      Sell Your Boat
                    </Button>
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-up max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {/* Boat Types Accordion */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                Boat Types
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 py-2 space-y-2">
                {boatCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block text-sm text-muted-foreground hover:text-primary py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </details>

            {/* Regions Accordion */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                Regions
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 py-2 space-y-2">
                {regions.map((region) => (
                  <Link
                    key={region.name}
                    to={region.href}
                    className="block text-sm text-muted-foreground hover:text-primary py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {region.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link 
              to="/browse" 
              className="text-sm text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse All Boats
            </Link>
            
            {user ? (
              <>
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="text-sm text-primary hover:text-primary/80 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <Link to="/my-listings" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    My Listings
                  </Button>
                </Link>
                <Link to="/post-listing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="aurora" size="sm" className="w-full mt-2">
                    Sell Your Boat
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="justify-start text-destructive mt-2"
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
                </Link>
                <Link to="/post-listing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="aurora" size="sm" className="w-full">
                    Sell Your Boat
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
