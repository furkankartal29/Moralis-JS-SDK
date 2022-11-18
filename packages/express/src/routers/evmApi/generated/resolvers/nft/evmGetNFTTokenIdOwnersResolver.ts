import {
  GetNFTTokenIdOwnersJSONRequest,
  getNFTTokenIdOwnersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTTokenIdOwnersResolver  = async (
  req: Request<GetNFTTokenIdOwnersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTTokenIdOwnersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTTokenIdOwnersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};