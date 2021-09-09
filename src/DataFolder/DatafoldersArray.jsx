import React, { useState } from "react";
import {
  BsFillFolderFill,
  BsThreeDotsVertical,
  BsFilePost,
} from "react-icons/bs";
import "./dataFolderArray.css";
import { data } from "./data";
import Datapreview from "./Datapreview";
function DatafoldersArray({ title }) {
  const [showPreview, setShowPreview] = useState(false);
  const [details, setDetails] = useState("");
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <h4>{title}</h4>
          {data.map((item, key) => {
            return (
              <div className="col-4">
                <div class="card">
                  <div className="row">
                    <div className="col-2">
                      <BsFillFolderFill fontSize={40} color="cornflowerblue" />
                    </div>
                    <div className="col-8">
                      {" "}
                      <p
                        key={key}
                        onClick={() => {
                          setDetails(item);
                          setShowPreview(true);
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                    <div className="col-2">
                      <BsThreeDotsVertical />
                    </div>
                    <span>{`${item.noOfFile} files, ${item.size}`}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {showPreview && <Datapreview data={details} />}
        {/* <div className="col-4">
          <button type="button" class="btn btn-primary">
            Upload
          </button>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <BsFilePost fontSize="50" color="green" />
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <p>{data[0].name}</p>
                <span>{` Connection: ${data[0].connection}`}</span>{" "}
                <span>{` Size: ${data[0].size}`}</span>{" "}
                <span>{` No of File: ${data[0].noOfFile}`}</span>{" "}
                <span>{` Rows: ${data[0].rows}`}</span>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>DATA FILES</p>
                <div className="card">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">Sent Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[0].dataFiles.map((item) => (
                        <tr>
                          {" "}
                          <td>{item.fileName}</td>
                          <td>{item.sentData}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default DatafoldersArray;
