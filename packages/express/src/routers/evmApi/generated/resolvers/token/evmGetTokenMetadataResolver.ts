import {
  GetTokenMetadataJSONRequest,
  getTokenMetadataOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetTokenMetadataResolver  = async (
  req: Request<GetTokenMetadataJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getTokenMetadataOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getTokenMetadataOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};