import {
  GetTokenPriceJSONRequest,
  getTokenPriceOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetTokenPriceResolver  = async (
  req: Request<GetTokenPriceJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenPriceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenPriceOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};