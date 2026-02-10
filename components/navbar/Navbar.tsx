import Container from "../global/Container"
import CartButton from "./CartButton"
import LinksDropdown from "./LinksDropdown"
import NavSearch from "./NavSearch"
import DarkMode from "./DarkMode";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo/>
        <NavSearch/>
        <div className="flex gap-4 items-center">
          <CartButton/>
          <DarkMode/>
          <LinksDropdown/>
        </div>
      </Container>
    </nav>
  )
}
export default Navbar