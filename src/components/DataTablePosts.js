import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./DataTablePosts.css";
export default function DataTablePosts(props) {
  const [globalFilter, setGlobalFilter] = useState(null);
  const renderHeader = () => {
    return (
      <div className='table-header'>
        List of {props.title} posts
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            type='search'
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder='Global Search'
          />
        </span>
      </div>
    );
  };
  const tot = () => {
    return props.total;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <Button
        type='button'
        icon='pi pi-money-bill'
        className='p-button-secondary'
        onClick={() => {
          if (props.cart.length == 0 || props.cart.length > 0) {
            const cartCopy = Object.assign([], props.cart);
            cartCopy.push({
              id: rowData.id,
              cat_id: rowData.cat_id,
              title: rowData.title,
              price: rowData.price,
              image: rowData.image,
            });
            props.setCart([...cartCopy]);
          } else
            props.setCart({
              id: rowData.id,
              cat_id: rowData.cat_id,
              title: rowData.title,
              price: rowData.price,
              image: rowData.image,
            });

          props.setTotal(props.total + rowData.price);
        }}
      ></Button>
    );
  };

  const titleBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Title</span>
        <span style={{ verticalAlign: "middle", marginLeft: ".5em" }}>
          {rowData.title}
        </span>
      </React.Fragment>
    );
  };
  const idBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Id</span>
        <span style={{ verticalAlign: "middle", marginLeft: ".5em" }}>
          {rowData.id}
        </span>
      </React.Fragment>
    );
  };
  const catidBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Category Id</span>
        <span style={{ verticalAlign: "middle", marginLeft: ".5em" }}>
          {rowData.cat_id}
        </span>
      </React.Fragment>
    );
  };
  const textBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Post</span>
        <span style={{ verticalAlign: "middle", marginLeft: ".5em" }}>
          {rowData.text}
        </span>
      </React.Fragment>
    );
  };
  const priceBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Price</span>
        <span style={{ verticalAlign: "middle", marginLeft: ".5em" }}>
          {rowData.price}
        </span>
      </React.Fragment>
    );
  };
  const imageBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className='p-column-title'>Image</span>
        <img className='table-img' src={rowData.image} />;
      </React.Fragment>
    );
  };
  const header = renderHeader();
  return (
    <div className='datatable-posts'>
      <div className='card'>
        <DataTable
          value={props.data}
          className='p-datatable-posts'
          dataKey='id'
          rowHover
          globalFilter={globalFilter}
          header={header}
          paginator
          rows={10}
          emptyMessage='No posts found'
          paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
          rowsPerPageOptions={[10, 25, 50]}
        >
          <Column
            sortField='id'
            filterField='id'
            header='Post Id'
            body={idBodyTemplate}
            sortable
            filter
            filterMatchMode='contains'
            filterPlaceholder='Search by Post Id'
          />
          <Column
            sortField='cat_id'
            filterField='cat_id'
            header='Category Id'
            body={catidBodyTemplate}
          />
          <Column
            sortField='title'
            filterField='title'
            header='Title'
            body={titleBodyTemplate}
            sortable
            filter
            filterMatchMode='contains'
            filterPlaceholder='Search by Title'
          />
          <Column field='text' header='Post' body={textBodyTemplate}></Column>
          <Column
            field='price'
            header='Price'
            body={priceBodyTemplate}
          ></Column>
          <Column
            sortField='cat_id'
            filterField='cat_id'
            header='Category Id'
            body={imageBodyTemplate}
          />
          <Column
            body={actionBodyTemplate}
            headerStyle={{ width: "8em", textAlign: "center" }}
            bodyStyle={{ textAlign: "center", overflow: "visible" }}
          />
        </DataTable>
      </div>
    </div>
  );
}
