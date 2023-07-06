import "./styles.css";
export default function App() {
  return <form className="new-item-form">
    <label htmlFor="item">New Item</label>
    <input type="text" id="item"></input>
  </form>
}