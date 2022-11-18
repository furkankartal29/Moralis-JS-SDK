import {
  SearchNFTsJSONRequest,
  searchNFTsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmSearchNFTsResolver  = async (
  req: Request<SearchNFTsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(searchNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      searchNFTsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};