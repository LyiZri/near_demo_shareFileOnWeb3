import {
  context,
  u128,
  PersistentVector,
} from "near-sdk-as";

@nearBindgen
export class storageModal {
  cid: string;
  file_name: string;
  file_size: i32;
  file_type: string;
}
@nearBindgen
export class PostedStorageMessage {
  premium: boolean;
  sender: string;
  cid: string;
  file_name: string;
  file_size: i32;
  file_type: string;
  tableList: storageModal[];
  constructor(public tableObj: storageModal) {
    this.premium =
      context.attachedDeposit >= u128.from("10000000000000000000000");
    this.sender = context.sender;
    this.cid = tableObj.cid;
    this.file_name = tableObj.file_name;
    this.file_size = tableObj.file_size;
    this.file_type = tableObj.file_type;
  }
}
/**
 * collections.vector is a persistent collection. Any changes to it will
 * be automatically saved in the storage.
 * The parameter to the constructor needs to be unique across a single contract.
 * It will be used as a prefix to all keys required to store data in the storage.
 */
export const stroageList = new PersistentVector<PostedStorageMessage>("0");
