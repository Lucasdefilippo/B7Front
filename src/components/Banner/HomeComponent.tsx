import BannersComponent from "./BannersComponent";
import { data } from "../../data";
import CardsComponent from "./CardsComponent";

export default function HomeComponent() {
  return (
    <main className="max-w-7xl w-full mx-auto p-6">
      <BannersComponent list={data.banners} />
      <CardsComponent />
    </main>
  );
}
