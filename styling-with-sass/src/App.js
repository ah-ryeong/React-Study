import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="button">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>

      <div className="button">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>

      <div className="button">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>

      <div className="button">
          <Button  size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="pink" size="small" outline>BUTTON</Button>
        </div>

        <div className="button">
          <Button  size="large" fullwidth>BUTTON</Button>
          <Button color="gray" size="large" fullwidth>BUTTON</Button>
          <Button color="pink" size="large" fullwidth>BUTTON</Button>
        </div>
    </div>
  );
}

export default App;
