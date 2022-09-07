import classes from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import {counteractions} from "./store/counter_slicer";
import {counteraction2} from "./store/counter_slicer_2"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterreducer.counter);
  const counter2 = useSelector(stat => stat.counterreducer2.counter2)

  const HandelIncreamnet = () => {
    dispatch(counteractions.increament());
  };


  const HandelIncreamnet2 = ()=>{
    dispatch(counteraction2.increasing())
  }
  

  return (
    <div className="App">
      <div className={classes.container}>
        <h1>Counter value</h1>
        <p>{counter}</p>
        <button onClick={HandelIncreamnet}>Increasing</button>

        <p>{counter2}</p>
        <button onClick={HandelIncreamnet2}>Increasing</button>
      </div>
    </div>
  );
}

export default App;
