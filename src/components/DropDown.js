import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropDown(props) {
  var a;
  const onCatChange = (e) => {
    props.setSelectedCat(e.value);
  };
  useEffect(() => {
    if (props.selectedCat && props.post) {
      a = props.post.filter((c) => c.id == props.selectedCat?.id);
      props.setSelectedPosts(a);
    }
  }, [props.selectedCat]);
  return (
    <div>
      <Dropdown
        value={props.selectedCat}
        options={props.cat}
        onChange={onCatChange}
        optionLabel='name'
        placeholder='Select A Category'
      />
    </div>
  );
}
