import axios, { AxiosResponse } from "axios";
import { ExampleType } from "../types";

const NameUrls = {
  getName: "getName",
};

const mainApi = axios.create({
  baseURL: "http://demo4272701.mockable.io/",
});

export async function getName(): Promise<AxiosResponse<ExampleType>> {
  return mainApi.get<ExampleType>(NameUrls.getName);
}
