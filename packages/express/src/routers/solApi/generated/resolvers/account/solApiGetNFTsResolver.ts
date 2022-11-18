import {
  GetNFTsJSONRequest ,
  getNFTsOperation ,
  GetNFTsJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetNFTsResolver  = async (
  req: Request<GetNFTsJSONRequest >,
  res: Response<GetNFTsJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};