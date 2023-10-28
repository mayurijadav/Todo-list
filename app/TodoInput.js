function TodoInput() {
    return (
        <div className="input">
            <input type="text" className="box" placeholder="Enter  your  task" /> <br></br>
            <input type="number" className="box" placeholder="Enter  your  priority" /><br></br>
            <input type="text" className="box" placeholder="Enter  your   estimited time" /><br></br>


            <button className="add">+</button>
        </div>
    )
  }
  export default TodoInput;
  