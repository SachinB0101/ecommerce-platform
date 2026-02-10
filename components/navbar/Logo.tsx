import Link from "next/link";
import { Button } from "../ui/button";
import { MdStore } from "react-icons/md";

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href="/">
        <MdStore className="w-6 h-6"></MdStore>
      </Link>
    </Button>
  );
};
export default Logo;
