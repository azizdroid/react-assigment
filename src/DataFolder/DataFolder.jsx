import React from "react";
import "./datafolder.css";
import DatafoldersArray from "./DatafoldersArray";
function DataFolder() {
  return (
    <div>
      <div className="container">
        <h2>DATA FOLDER </h2>
        <div className="row">
          <div className="col-4">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      <DatafoldersArray title="Connection 1" />
      <DatafoldersArray title="Connection 2" />
    </div>
  );
}

export default DataFolder;
