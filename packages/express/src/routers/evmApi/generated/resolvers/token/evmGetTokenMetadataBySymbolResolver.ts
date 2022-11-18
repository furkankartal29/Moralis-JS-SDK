import {
  GetTokenMetadataBySymbolJSONRequest,
  getTokenMetadataBySymbolOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetTokenMetadataBySymbolResolver  = async (
  req: Request<GetTokenMetadataBySymbolJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenMetadataBySymbolOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenMetadataBySymbolOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};