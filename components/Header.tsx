import Link from "next/link";
import { Card } from "./ui/card";
import { CircleArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  imageUrl?: string;
  name: string;
};
const Header = ({ name, imageUrl }: Props) => {
  return (
    <Card className="w-full flex rounded-lg items-center p-2 justify-between">
      <div className="flex items-center gap-2">
        <Link href={"/conversations"} className="block lg:hidden">
          <CircleArrowLeft />
        </Link>
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <h2 className="font-semibold">{name}</h2>
      </div>
    </Card>
  );
};

export default Header;
