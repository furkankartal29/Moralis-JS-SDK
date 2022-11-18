import {
  Web3ApiVersionJSONRequest,
  web3ApiVersionOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmWeb3ApiVersionResolver  = async (
  req: Request<Web3ApiVersionJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(web3ApiVersionOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      web3ApiVersionOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};