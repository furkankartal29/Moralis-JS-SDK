import {
  GetWalletNFTTransfersJSONRequest,
  getWalletNFTTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetWalletNFTTransfersResolver  = async (
  req: Request<GetWalletNFTTransfersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getWalletNFTTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletNFTTransfersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};