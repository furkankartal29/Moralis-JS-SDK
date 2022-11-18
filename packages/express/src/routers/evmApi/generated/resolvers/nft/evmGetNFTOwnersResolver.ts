import {
  GetNFTOwnersJSONRequest,
  getNFTOwnersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTOwnersResolver  = async (
  req: Request<GetNFTOwnersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTOwnersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTOwnersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};