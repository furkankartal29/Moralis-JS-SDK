import {
  GetNFTTransfersFromToBlockJSONRequest,
  getNFTTransfersFromToBlockOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTTransfersFromToBlockResolver  = async (
  req: Request<GetNFTTransfersFromToBlockJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTTransfersFromToBlockOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTTransfersFromToBlockOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};