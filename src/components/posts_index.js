import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // Here this.props.posts is an object so normal .map cannot be used. So, we will use lodash.map function.
    return _.map(this.props.posts, post =>{
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
      // <ul>
      //   {this.post}
      // </ul>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// export default connect(mapStateToProps, { fetchPost: fetchPosts })(PostsIndex);  Below is the same as this.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
