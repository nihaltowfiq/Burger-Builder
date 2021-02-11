import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControl = ({ label, type, addIngredient, removeIngredient }) => {
  return (
    <div className="d-flex my-1">
      <div className="mr-auto ml-5 font-weight-bold">{label}</div>
      <button onClick={removeIngredient} className="btn btn-danger btn-sm mx-1">
        Less
      </button>
      <button onClick={addIngredient} className="btn btn-success btn-sm mx-1">
        More
      </button>
    </div>
  );
};

const Controls = ({ addIngredient, removeIngredient }) => {
  return (
    <div className="container ml-md-5">
      <Card className="my-5 text-center">
        <CardHeader
          className="text-white"
          style={{ backgroundColor: "#D70F64" }}
        >
          <h4>Add Ingredients</h4>
        </CardHeader>
        <CardBody>
          {controls.map((item) => {
            return (
              <BuildControl
                addIngredient={() => addIngredient(item.type)}
                removeIngredient={() => removeIngredient(item.type)}
                label={item.label}
                type={item.type}
                key={Math.random()}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5>Price BDT</h5>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Controls;
