import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/recipes">
                Food &amp; Recipes
              </Link>
              <Link className="navbar-item" to="/bridge">
                Bridge
              </Link>
              <Link className="navbar-item" to="/humour">
                Humour
              </Link>
              <Link className="navbar-item" to="/fun-with-words">
                Fun With Words
              </Link>
              <Link className="navbar-item" to="/quotes">
                Great quotes
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
