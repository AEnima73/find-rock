import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handlerSubmit}
              name="form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.state.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  Escuela DevRock
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>aguante todo</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
