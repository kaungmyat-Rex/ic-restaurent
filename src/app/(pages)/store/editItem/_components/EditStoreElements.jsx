import React from "react";
import EditHeader from "./EditHeader";
import EditForm from "./EditForm";

const EditStoreElements = ({ data, itemId }) => {
  return (
    <div>
      <EditHeader />
      <EditForm data={data} itemId={itemId} />
    </div>
  );
};

export default EditStoreElements;
