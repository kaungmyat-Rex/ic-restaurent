import React from "react";
import EditDebtHeader from "./EditDebtHeader";
import EditDebtForm from "./EditDebtForm";

const EditDebtElements = ({ data, itemId }) => {
  return (
    <div>
      <EditDebtHeader />
      <EditDebtForm data={data} itemId={itemId} />
    </div>
  );
};

export default EditDebtElements;
