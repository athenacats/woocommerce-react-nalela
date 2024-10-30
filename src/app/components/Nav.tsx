"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation({ data }: { data: any }) {
  const pathname = usePathname(); // Get the current path

  interface MenuItem {
    id: string;
    label: string;
    parentId: string | null;
    path: string;
    children?: MenuItem[];
  }

  // Function to convert flat list to hierarchical list
  function buildMenuHierarchy(menuItems: { node: MenuItem }[]) {
    // Map each item by id for quick access
    const itemMap: Record<string, MenuItem> = {};
    menuItems.forEach((item) => {
      itemMap[item.node.id] = { ...item.node, children: [] };
    });

    const rootItems: MenuItem[] = [];

    menuItems.forEach((item) => {
      const menuItem = itemMap[item.node.id];
      if (menuItem.parentId === null) {
        // Top-level item
        rootItems.push(menuItem);
      } else {
        // Add as a child of its parent
        if (itemMap[menuItem.parentId]) {
          itemMap[menuItem.parentId].children?.push(menuItem);
        }
      }
    });

    return rootItems;
  }

  // Usage example
  const menuData = data.menus.nodes[0].menuItems.edges;
  const hierarchicalMenu = buildMenuHierarchy(menuData);

  const renderMenu = (items: MenuItem[]) => (
    <ul className="navbar-nav me-auto">
      {items.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${
            item.children && item.children.length > 0 ? "dropdown" : ""
          }`}
        >
          <Link
            href={item.path}
            className={`nav-link ${pathname === item.path ? "active" : ""} ${
              item.children && item.children.length > 0 ? "dropdown-toggle" : ""
            }`}
            {...(item.children && item.children.length > 0
              ? {
                  "data-bs-toggle": "dropdown",
                  "data-bs-display": "static",
                  role: "button",
                  "aria-expanded": "false",
                }
              : {})}
          >
            {item.label}
          </Link>
          {item.children && item.children.length > 0 && (
            <ul className="dropdown-menu dropdown-submenu dropend ">
              {renderMenuChild(item.children)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const renderMenuChild = (items: MenuItem[]) => (
    <>
      {items.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${
            item.children && item.children.length > 0 ? "dropdown" : ""
          }`}
        >
          <Link
            href={item.path}
            className={`nav-link ${pathname === item.path ? "active" : ""} ${
              item.children && item.children.length > 0 ? "dropdown-toggle" : ""
            }`}
            {...(item.children && item.children.length > 0
              ? {
                  "data-bs-toggle": "dropdown",
                  "data-bs-display": "static",
                  role: "button",
                  "aria-expanded": "false",
                }
              : {})}
          >
            {item.label}
          </Link>
          {item.children && item.children.length > 0 && (
            <ul className="dropdown-menu dropdown-submenu dropend dropdown-submenu-left">
              {renderMenuChild(item.children)}
            </ul>
          )}
        </li>
      ))}
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
          {renderMenu(hierarchicalMenu)}
        </div>
      </div>
    </nav>
  );
}
