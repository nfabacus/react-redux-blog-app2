import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;  //This match is provided by React Router.  You can access the params like this.  This is pulling out id from match.params.
    console.log('id: ', id);
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    // if the post is not yet received, then show 'loading' instead.
    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// We can select only { posts } from the entire state, then also select specific post using ownProps.
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
