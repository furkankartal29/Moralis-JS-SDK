import {
  GetContractEventsJSONRequest,
  getContractEventsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetContractEventsResolver  = async (
  req: Request<GetContractEventsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getContractEventsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getContractEventsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};