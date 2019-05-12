import React, { Component } from 'react';
import Products from './components/Products'
import Filters from './components/Filters'

class App extends Component {

  state = {
    products : [],
    filtProducts : [],
    sortType : "",
    size : ""
  }

  componentWillMount() {
    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => this.setState({
      products : data.products,
      filtProducts : data.products
    }))
  }

  changeSort = (e) => {
    this.setState({
      sortType : e.target.value
    })
    //console.log(e.target.value)
    this.sortList();
  }

  changeSize = (e) => {
    this.setState({
      size : e.target.value
    })
    //console.log(e.target.value)
    this.sortList();
  }

  sortList = () => {
    this.setState(state => {
      if(state.sortType !== ""){            //sort by price
        state.products.sort(function(a,b){
          if(state.sortType === "highToLow"){
            return b.price-a.price
          }
          if(state.sortType === "lowToHigh"){
            return a.price-b.price
          }
        })
      }else {               //sort by id
        state.products.sort(function(a,b){
          return a.id-b.id
        })
      }

      if(state.size !== ""){              // sort the already price-sorted products by size
          return {filtProducts : state.products.filter(a => {
            return (a.availableSizes.indexOf(state.size) >= 0)
          })
        }
         }
      return {
        filtProducts : state.products
      }

    })
    }

    render() {
      return (
        <div className="container">

          <div className="row text-center">
            <div className="offset-md-4 col-md-4"><h1>Buy T-Shirts here</h1></div>
          </div>
          <hr/>

          <div className="row">
            <div className="offset-md-2 col-md-8">
              <Filters count={this.state.filtProducts.length} changeSort={this.changeSort} changeSize={this.changeSize}/>
            </div>
          </div>
          <hr/>

        <div className="row">
            <div className="offset-md-2 col-md-8">
              <Products filtProducts={this.state.filtProducts} />
            </div>
          </div>

        </div>
      );
    }
  }


export default App;







//
// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;
//   };
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//   };
// render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={e => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }
// export default App;
