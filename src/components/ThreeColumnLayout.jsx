import "../styles/ThreeColumnLayout.css"; // Importing the CSS for styles

const ThreeColumnLayout = () => {
  return (
    <div className="container">
      <div className="column column-left">
        <h2>Left Column</h2>
        <p>This is the left column content.</p>
      </div>
      <div className="column column-center">
        <h2>Center Column</h2>
        <p>This is the center column content.</p>
      </div>
      <div className="column column-right">
        <h2>Right Column</h2>
        <p>This is the right column content.</p>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
