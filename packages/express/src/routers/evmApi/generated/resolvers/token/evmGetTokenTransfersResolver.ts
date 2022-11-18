import {
  GetTokenTransfersJSONRequest,
  getTokenTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetTokenTransfersResolver  = async (
  req: Request<GetTokenTransfersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenTransfersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};