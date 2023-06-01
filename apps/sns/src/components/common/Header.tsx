import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 w-full h-12 flex items-center justify-between px-5 border-b z-10">
      <h1>나의 SNS</h1>
      <Navigation />
    </header>
  );
};

export default Header;
