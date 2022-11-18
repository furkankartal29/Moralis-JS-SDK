import {
  GetNFTsJSONRequest,
  getNFTsOperation,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solGetNFTsResolver  = async (
  req: Request<GetNFTsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};