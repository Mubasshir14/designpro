// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Link as Linkscroll } from "react-scroll";
// import { menuList } from "@/utils/fackData/menuList";

// const Header = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   const handleDropdownToggle = (id: number) => {
//     setOpenDropdown((prev) => (prev === id ? null : id));
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowPos = window.scrollY;
//       if (windowPos >= 100) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);

//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
//       <div className="header-upper">
//         <div className="container">
//           <div className="header-inner d-flex align-items-center">
//             <div className="logo-outer">
//               <div className="logo">
//                 <a href="#">
//                   <Image
//                     width={160}
//                     height={43}
//                     src="/images/logos/logo.png"
//                     alt="Logo"
//                     title="Logo"
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="nav-outer clearfix">
//               <nav className="main-menu navbar-expand-lg">
//                 <div className="navbar-header">
//                   <div className="mobile-logo">
//                     <a href="#">
//                       <Image
//                         width={120}
//                         height={32}
//                         src="/images/logos/logo.png"
//                         alt="Logo"
//                         title="Logo"
//                       />
//                     </a>
//                   </div>
//                   <button
//                     type="button"
//                     className="navbar-toggle"
//                     data-bs-toggle="collapse"
//                     data-bs-target=".navbar-collapse"
//                   >
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                   </button>
//                 </div>
//                 <div className="navbar-collapse collapse">
//                   {
//                     <ul className="navigation clearfix onepage">
//                       {menuList.map(({ id, label, path }) => (
//                         <li key={id}>
//                           <Linkscroll
//                             className="nav-link-click"
//                             smooth={true}
//                             to={`${path}`}
//                           >
//                             {label}
//                           </Linkscroll>
//                         </li>
//                       ))}
//                     </ul>
//                   }
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { menuList, DataType } from "@/utils/fackData/menuList";
import Link from "next/link";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle dropdown toggle
  const handleDropdownToggle = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null); // Close dropdowns when toggling mobile menu
  };

  // Handle scroll for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 100);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`main-header ${isFixed ? "fixed-header" : ""} ${
        isMobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <Image
                    width={40}
                    height={50}
                    src="https://i.ibb.co.com/VpwdTnSt/24-Sep24-Simon-Free-Upload.png"
                    // src="/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-outer">
              <nav className="main-menu navbar-expand-lg">
                {/* Mobile Menu Toggle */}
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <a href="/">
                      <Image
                        width={140}
                        height={38}
                        src="/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                        priority
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                {/* Menu Items */}
                <div
                  className={`navbar-collapse collapse ${
                    isMobileMenuOpen ? "show" : ""
                  }`}
                >
                  <ul className="navigation clearfix onepage">
                    {menuList.map(({ id, label, path, children }) => (
                      <li
                        key={id}
                        className={`nav-item ${children ? "dropdown" : ""} ${
                          openDropdown === id ? "active" : ""
                        }`}
                        onMouseEnter={() =>
                          !isMobileMenuOpen &&
                          children &&
                          handleDropdownToggle(id)
                        }
                        onMouseLeave={() =>
                          !isMobileMenuOpen && children && setOpenDropdown(null)
                        }
                        onClick={() =>
                          isMobileMenuOpen &&
                          children &&
                          handleDropdownToggle(id)
                        }
                      >
                        <LinkScroll
                          className="nav-link-click"
                          smooth={true}
                          to={path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {label}
                          {children && (
                            <span className="dropdown-icon">
                              <i className="fas fa-chevron-down"></i>
                            </span>
                          )}
                        </LinkScroll>

                        {/* Submenu (Dropdown) */}
                        {/* {children && (
                          <ul
                            className={`dropdown-menu ${
                              openDropdown === id ? "show" : ""
                            }`}
                          >
                            {children.map((child) => (
                              <li key={child.id}>
                                <LinkScroll
                                  className=""
                                  smooth={true}
                                  to={child.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </LinkScroll>
                              </li>
                            ))}
                          </ul>
                        )} */}
                        {/* Submenu (Dropdown) */}
                        {children && (
                          <ul
                            className={`dropdown-menu rounded-start ${
                              openDropdown === id ? "show" : ""
                            }`}
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              display: openDropdown === id ? "block" : "none",
                              backgroundColor: "#fff",
                              zIndex: 1000,
                              minWidth: "180px",
                              padding: "10px 0",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              borderRadius: "0.25rem",
                            }}
                          >
                            {children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href={child.path}
                                  className="dropdown-item  text-dark"
                                  // smooth={true}
                                  // to={child.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
