import {
  GetWalletTransactionsJSONRequest,
  getWalletTransactionsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetWalletTransactionsResolver  = async (
  req: Request<GetWalletTransactionsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getWalletTransactionsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getWalletTransactionsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};