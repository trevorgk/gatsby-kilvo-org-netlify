import React from 'react';
import { Link } from 'gatsby';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/recipes/">
                        Food &amp; Recipes
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/bridge/">
                        Bridge
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-6">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/humour/">
                        Humour
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/fun-with-words/">
                        Fun With Words
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/quotes/">
                        Great quotes
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/links/">
                        Links
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
