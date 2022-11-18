import {
  GetNFTLowestPriceJSONRequest,
  getNFTLowestPriceOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTLowestPriceResolver  = async (
  req: Request<GetNFTLowestPriceJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTLowestPriceOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTLowestPriceOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};