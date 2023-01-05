import { Component } from "react";
import sunnySide from "./sunnySide.png";

export class Mroutine extends Component {
  state = {
    userInput: "",
    routineList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please enter an item");
    } else {
      let listArray = this.state.routineList;
      listArray.push(input);
      this.setState({ routineList: listArray, userInput: "" });
      console.log(listArray);
    }
  }

  crossedWord(e) {
    const li = e.target;
    li.classList.toggle("crossed");
  }

  clearAll() {
    let listArray = this.state.routineList;
    listArray = [];
    this.setState({ routineList: listArray });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What's your plan?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              className="btnAdd"
              onClick={() => this.addItem(this.state.userInput)}
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.routineList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={sunnySide} width="40px" alt="egg"/>
                {item}
              </li>
            ))}
          </ul>
          <div className="container">
            <button className="btnClear" onClick={() => this.clearAll()}>
              Clear All
            </button>
          </div>
        </form>
      </div>
    );
  }
}
