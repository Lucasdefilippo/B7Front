import { useLocation, useNavigate, useSearchParams } from "react-router";

export function UseQueryString() {
  const router = useNavigate();
  const pathname = useLocation().pathname;
  const [searchParams] = useSearchParams();

  return {
    get: (att: string) => {
      return searchParams.get(att);
    },

    set: (att: string, val: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (val) {
        params.set(att, val);
      } else {
        params.delete(att);
      }
      router(`${pathname}?${params}`);
    },
  };
}
