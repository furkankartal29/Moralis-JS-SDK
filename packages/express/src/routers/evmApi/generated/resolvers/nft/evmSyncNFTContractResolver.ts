import {
  SyncNFTContractJSONRequest,
  syncNFTContractOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmSyncNFTContractResolver  = async (
  req: Request<SyncNFTContractJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(syncNFTContractOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      syncNFTContractOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};