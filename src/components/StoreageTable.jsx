// import { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { Table } from "antd";

export default function StorageTable({ storageList, contract,setLoding,loading }) {
  // const [loading,setLoading] = useState(false)
  const [tableData, setTableData] = useState([
    {
      key: "1",
      cid: "1",
      fileName: "1",
    },
  ]);
  const columns = [
    {
      key: "cid",
      title: "uploader",
      dataIndex: "sender",
    },
    {
      key: "cid",
      title: "file name",
      dataIndex: "file_name",
    },
    {
      key: "cid",
      title: "cid",
      dataIndex: "cid",
      render: (cid) => {
        return (
          <a
            onClick={() => {
              window.open(`https://${cid}.ipfs.dweb.link/`);
            }}
          >
            {cid}
          </a>
        );
      },
    },
    {
      key: "cid",
      title: "Type",
      dataIndex: "file_type",
    },
  ];
  // 获取文件列表
  const getList = () => {
    setLoding(true)
    contract.getStorageMessage().then((value) => {
      setTableData(value);
      setLoding(false)
    });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <Table 
        dataSource={tableData} 
        loading={loading}
        columns={columns}
       ></Table>
    </div>
  );
}
// export default StorageTable
