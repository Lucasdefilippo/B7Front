import SkeletonComponent from "./SkeletonComponent";
import BestSellerComponent from "./BestSellerComponent";
import MostViewsComponent from "./MostViewsComponent";
import { Suspense } from "react";

export default function SectionComponent() {
  return (
    <div>
      <div>
        <Suspense fallback={<SkeletonComponent />}>
          <MostViewsComponent />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<SkeletonComponent />}>
          <BestSellerComponent />
        </Suspense>
      </div>
    </div>
  );
}
