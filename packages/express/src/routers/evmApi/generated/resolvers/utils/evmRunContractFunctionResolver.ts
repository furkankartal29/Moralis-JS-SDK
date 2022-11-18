import {
  RunContractFunctionJSONRequest,
  runContractFunctionOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmRunContractFunctionResolver  = async (
  req: Request<RunContractFunctionJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(runContractFunctionOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      runContractFunctionOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};