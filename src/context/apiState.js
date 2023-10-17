import ApiContext from "./apiContext";
import axios from "axios";

const ApiState = (props) => {
  // write all api calls here and export them to the components that need them
  return (
    <ApiContext.Provider
      value={
        {
          // the functions go here
        }
      }
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
