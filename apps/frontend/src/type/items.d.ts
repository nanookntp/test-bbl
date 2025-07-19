export interface ItemsType {
    id:string
    name:string
    description:string
    createdAt:Date
}

export interface CreateItemsBodyType {
    name:string
    description:string
}


export type ListItemsServiceType = () => AxiosPromise<ItemsType[]>;
export type CreateItemsServiceType = (payload:CreateItemsBodyType) => AxiosPromise<void>
  