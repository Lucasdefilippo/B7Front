import { Link } from "react-router";

type Props = {
  href: string;
  icon: string;
  label?: string;
};
export const FooterButton = ({ href, icon, label }: Props) => {
  return (
    <Link to={href}>
      <div className="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-gray-900">
        <img src={icon} alt="" width={24} height={24} />
        {label && <div className="flex-1">{label}</div>}
      </div>
    </Link>
  );
};
