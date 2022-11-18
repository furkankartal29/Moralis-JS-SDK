import {
  GetContractLogsJSONRequest,
  getContractLogsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetContractLogsResolver  = async (
  req: Request<GetContractLogsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getContractLogsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getContractLogsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};