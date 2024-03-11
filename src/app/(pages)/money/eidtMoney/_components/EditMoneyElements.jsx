import React from "react";
import EditMoneyHeader from "./EditMoneyHeader";
import EditForm from "./EditForm";

const EditMoneyElements = ({ data, itemId }) => {
  return (
    <div>
      <EditMoneyHeader />
      <EditForm data={data} itemId={itemId} />
    </div>
  );
};

export default EditMoneyElements;
