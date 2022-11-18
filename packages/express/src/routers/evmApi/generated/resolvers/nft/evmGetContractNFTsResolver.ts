import {
  GetContractNFTsJSONRequest,
  getContractNFTsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetContractNFTsResolver  = async (
  req: Request<GetContractNFTsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getContractNFTsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getContractNFTsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};