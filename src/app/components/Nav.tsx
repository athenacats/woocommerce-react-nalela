"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation({ data }: { data: any }) {
  const pathname = usePathname(); // Get the current path
  console.log("pathname is", pathname);
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {data.generalSettings.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {data.menus.nodes[0].menuItems.edges.map(({ node }: any) => {
              console.log(node.path);
              return (
                <li className="nav-item" key={node.id}>
                  <Link
                    className={`${
                      pathname === "/" && node.path === "http://nalela.local/"
                        ? "nav-link active"
                        : pathname === node.path &&
                          node.path !== "http://nalela.local/"
                        ? "nav-link active"
                        : "nav-link"
                    }`}
                    href={node.path}
                  >
                    {node.label}
                    {pathname === node.path && (
                      <span className="visually-hidden">(current)</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
