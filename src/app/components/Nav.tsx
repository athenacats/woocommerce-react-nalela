import Link from "next/link";
import client from "../lib/apolloClient";
import ApolloWrapper from "../lib/apolloProvider";
import { HEADER_QUERY } from "../lib/headerQuery";

export default async function Nav() {
  const { data } = await client.query({
    query: HEADER_QUERY,
  });
  return (
    <ApolloWrapper>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {data.generalSettings.title}
          </Link>

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
              {data.menus.nodes[0].menuItems.edges.map(({ node }: any) => (
                <li className="nav-item" key={node.id}>
                  <Link className="nav-link active" href={node.path}>
                    {node.label}
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              ></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </ApolloWrapper>
  );
}
