import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addChannel } from "./redux/actions/channel";
// import { Link } from "react-router-dom";

class ChannelForm extends Component {
  state = {
    name: "",
    image_url: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.addChannel(this.state, this.props.history);
  };

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Channel Title</label>
                <input
                  type="text"
                  className="form-control"
                  //value={this.name}
                  name="name"
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image_url">Image Url</label>
                <input
                  type="image_url"
                  className="form-control"
                  //value={this.image_url}
                  name="image_url"
                  placeholder="image_url"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add New Channel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addChannel: (userData, history) => dispatch(addChannel(userData, history))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
