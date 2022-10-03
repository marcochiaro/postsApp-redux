import "./App.css";
import AddPostForm from "./features/post/components/AddPostForm";
// import Counter from "./features/counter/Counter";
import PostsList from "./features/post/components/PostsList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
