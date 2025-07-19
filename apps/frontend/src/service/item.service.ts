import axios from "axios";

//internal
import { ListItemsServiceType,CreateItemsServiceType } from "../type/items";

export const listItems: ListItemsServiceType = () => {
    return axios({
      url: `http://localhost:3000/api/v1/items`,
      method: 'GET',
    });
  };
  
  export const createItems: CreateItemsServiceType = (payload) => {
    return axios({
      url: `http://localhost:3000/api/v1/items`,
      method: 'POST',
      data:payload
    });
  };