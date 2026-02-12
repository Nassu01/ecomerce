import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import ListeCategories from "./ListeCategories";

const linkClass = ({ isActive }) =>
  [
    "text-sm tracking-wide",
    isActive ? "font-semibold" : "font-medium",
    "hover:opacity-80",
  ].join(" ");

export default function Navbar({ cartCount = 0 }) {
  const [hover, setHover] = useState(false);

  return (
    <header className="py-6 w-full">
      <div className="px-5 w-full">
        <div className="w-full bg-neutral-100 rounded-full px-8 py-5 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <NavLink to="/" className={linkClass} end>
              HOME
            </NavLink>

            {/* CATEGORY dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <button className="flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-80 px-3 py-2 rounded">
                CATEGORY
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {hover && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border rounded shadow-lg z-50">
                  <ListeCategories />
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/logo.png" // ✅ Logo dans dossier public
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-6">
            <IconButton label="Search">
              <SearchIcon />
            </IconButton>

            <IconButton label="Account">
              <UserIcon />
            </IconButton>

            <IconButton label="Wishlist">
              <HeartIcon />
            </IconButton>

            <IconButton label="Cart">
              <div className="relative">
                <CartIcon />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs border bg-white rounded-full px-1.5">
                    {cartCount}
                  </span>
                )}
              </div>
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({ children, label }) {
  return (
    <button
      className="hover:opacity-80"
      aria-label={label}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}

/* Icons */
function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7-4.6-9.2-9A5.5 5.5 0 0 1 12 5.6 5.5 5.5 0 0 1 21.2 12c-2.2 4.4-9.2 9-9.2 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6h15l-1.5 9h-12L6 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 3H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}