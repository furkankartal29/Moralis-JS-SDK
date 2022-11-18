import {
  GetNFTTransfersJSONRequest,
  getNFTTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTTransfersResolver  = async (
  req: Request<GetNFTTransfersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTTransfersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};