import './App.css';
import React, {Component} from 'react';

class App extends Component{

  state = {
    posts: []
  };

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch ('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotosJson = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    });

    this.setState({ posts: postsAndPhotosJson });
    // this.setState({ photos: photosJson});

  }

  render(){
    const { posts } = this.state;
    return (
          <section className='container'>
          <div className="posts">

           {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title} className='photos' />
            <div key={post.id} className='post-content'>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              </div>
              </div>
           ))}
          </div>
          </section>
        );
  }

}

export default App;