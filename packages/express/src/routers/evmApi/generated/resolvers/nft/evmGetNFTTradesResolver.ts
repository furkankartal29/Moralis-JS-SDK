import {
  GetNFTTradesJSONRequest,
  getNFTTradesOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTTradesResolver  = async (
  req: Request<GetNFTTradesJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTTradesOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTTradesOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};