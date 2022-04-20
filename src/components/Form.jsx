import React from "react";
import PropTypes from "prop-types";
import { client } from "../utils/web3";
import { useEffect } from "react";
export default function Form({ contract, gas, currentUser,setLoding }) {
  // const cluster = new Cluster
  let filesInput;
  const change = async (e) => {
    console.log(setLoding);
    setLoding(true)
    const files = filesInput.files;
    const cid = await client.put(files);
    console.log(cid);
    const tableObj = {
      cid: cid,
      file_name: files[0].name,
      file_size: files[0].size,
      file_type: files[0].type,
    };
    contract
      .addStorage(
        {
          tableObj,
        },
       
        gas
      )
      .then(() => {
        contract
          .getStorageMessage({ userId: currentUser.accountId })
          .then((list) => {
            console.log(list);
            setLoding(false)
          });
      });
  };
  return (
    <div>
      <input
        type="file"
        onChange={change}
        className="displayNone"
        ref={(el) => {
          filesInput = el;
        }}
        style={{ display: "none" }}
      />
      <button
        className="inputFiles"
        onClick={() => {
          filesInput.click();
        }}
      >
        上传文件
      </button>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
};
