import {
  ReSyncMetadataJSONRequest,
  reSyncMetadataOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmReSyncMetadataResolver  = async (
  req: Request<ReSyncMetadataJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(reSyncMetadataOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      reSyncMetadataOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};