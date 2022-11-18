import {
  GetNFTTransfersByBlockJSONRequest,
  getNFTTransfersByBlockOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTTransfersByBlockResolver  = async (
  req: Request<GetNFTTransfersByBlockJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTTransfersByBlockOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTTransfersByBlockOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};