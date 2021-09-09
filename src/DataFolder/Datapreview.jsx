import React from "react";
import { BsFilePost } from "react-icons/bs";
function Datapreview({ data }) {
  return (
    <div>
      <div className="col-4">
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
              <p>{data.name}</p>
              <span>{` Connection: ${data.connection}`}</span>{" "}
              <span>{` Size: ${data.size}`}</span>{" "}
              <span>{` No of File: ${data.noOfFile}`}</span>{" "}
              <span>{` Rows: ${data.rows}`}</span>{" "}
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
                    {data.dataFiles.map((item) => (
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
      </div>
    </div>
  );
}

export default Datapreview;
