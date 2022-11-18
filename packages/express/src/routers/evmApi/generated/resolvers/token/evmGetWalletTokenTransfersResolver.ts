import {
  GetWalletTokenTransfersJSONRequest,
  getWalletTokenTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetWalletTokenTransfersResolver  = async (
  req: Request<GetWalletTokenTransfersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getWalletTokenTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletTokenTransfersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};