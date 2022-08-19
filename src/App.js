  // question number 1//
import React from "react";

class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => (
                <ol key = { item.id } >
                    UserId: { item.userId },
                    Title: { item.title},
                    body: { item.body }
                    </ol>
                ))
            }
        </div>
    );
}
}

export default App;


// question number 2//
import React from "react";

const arr = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "grape" }
];

export default function App() {
  const [items, setItems] = React.useState(arr);

  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));

  return (
    <>
      {items.map((it, index) => {
        return (
          <div key={it.id}>
            {it.name} <button onClick={deleteItem(index)}>delete</button>
          </div>
        );
      })}
    </>
  );
}
