const element = (
  // Write your code here.
  <div class="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h4 className="heading">Kiran V</h4>
      <p className="para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
      >
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
