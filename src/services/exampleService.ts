import * as mainClient from "./mainClient";
import { ExampleType } from "../types";
import { AxiosResponse } from "axios";

export async function getName(): Promise<AxiosResponse<ExampleType>> {
  return mainClient.getName();
}
