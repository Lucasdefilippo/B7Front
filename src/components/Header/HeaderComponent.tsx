import { Link } from "react-router";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import SearchBarComponent from "./SearchBarComponent";
import { data } from "../../data";

export default function HeaderComponent() {
  const [menuOpened, setMenuOpened] = useState(false);

  const menu = data.menu;

  return (
    <header className="bg-white border-b border-b-gray-100">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Brasil{" "}
        <span className="md:inline hidden">
          nas compras acima de R$199,90 <strong>APROVEITA</strong>!
        </span>
      </div>

      {/* Botões */}

      <div className="w-full max-w-7xl mx-auto p-6 ">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src="/assets/ui/logo-black.png"
              alt="B7store logo"
              width={120}
              height={40}
              id="logo"
            />
          </Link>
          <div className="flex-1">
            <div className="hidden w-full items-center md:flex md:pr-6">
              <div className="flex-1">
                <ul className="flex gap-10 justify-center">
                  {menu.map((item) => (
                    <li key={item.label}>
                      <Link to={item.href}>
                        <p className="font-medium text-lg text-gray-500">
                          {item.label}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <SearchBarComponent />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/my-order">
              <ButtonComponent
                data={{ src: "/assets/ui/user-line.png", alt: "Usuario" }}
              />
            </Link>
            <Link to="/cart">
              <ButtonComponent
                data={{
                  src: "/assets/ui/shopping-bag-4-line.png",
                  alt: "Carrinho",
                }}
              />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <ButtonComponent
                data={{
                  src: "assets/ui/menu-line.png",
                  alt: "Menu",
                  selected: menuOpened,
                  srcSelected: "/assets/ui/menu-line-white.png",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}

      {menuOpened && (
        <div className="md:hidden pb-6">
          {menu.map((item) => (
            <Link key={item.label} to={item.href}>
              <div className="border-b border-gray-200 text-center p-6 flex justify-between">
                <div>
                  <p className="font-medium text-lg text-gray-500">
                    {item.label}
                  </p>
                </div>
                <img
                  src="/assets/ui/arrow-up-right.png"
                  alt="Seta"
                  className="size-6"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="p-6 pt-0 md:hidden">
        <SearchBarComponent />
      </div>
    </header>
  );
}
