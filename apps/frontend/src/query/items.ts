import { AxiosError } from 'axios';
import { MutationFunction, UseQueryResult, useMutation, useQuery } from 'react-query';

// internal
import * as services from '../service/item.service';
import { CreateItemsBodyType, ItemsType, ListItemsServiceType } from '../type/items';

const key = 'items';

const listItem = async ()=> {
  try {
    const { data, status } = await services.listItems()
    if (status === 200) {
      return data?.data;
    }
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
};

export const useListItem = ():UseQueryResult<ItemsType[]> => {
  return useQuery([key], () => listItem(), {
    retry: 1,
  });
};


const createItems: MutationFunction<string, CreateItemsBodyType> = async (variable) => {
    try {
      const { data } = await services.createItems(variable);
      return data;
    } catch (error) {
      throw error
    }
  };
  
  export const useCreateItems = () => {
    return useMutation(createItems);
  };