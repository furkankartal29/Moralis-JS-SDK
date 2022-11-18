import {
  GetWalletNFTsJSONRequest,
  getWalletNFTsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetWalletNFTsResolver  = async (
  req: Request<GetWalletNFTsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getWalletNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletNFTsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};