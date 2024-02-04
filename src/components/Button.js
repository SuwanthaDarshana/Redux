import React from "react";
import { fetchPosts } from "../actions/PostAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


function Button() {
  return (
    <div>
      <button onClick={()=>this.props.fetchPosts()}>Click Me</button>
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(null, matchDispatchToProps)(Button);
