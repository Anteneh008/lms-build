import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div>
          {/* Left */}
          <div className="flex items-center gap-4"></div>
          {/* Right */}
          <div className="flex items-center space-x-2 md:space-x-4"></div>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
