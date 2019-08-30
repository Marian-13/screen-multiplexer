import React from "react";
import { Button } from "react-materialize";

const MainPage = () => (
  <Button waves="light">
    {process.env.NODE_ENV}
  </Button>
);

export default MainPage;
