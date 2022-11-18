import {
  GetNFTContractTransfersJSONRequest,
  getNFTContractTransfersOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetNFTContractTransfersResolver  = async (
  req: Request<GetNFTContractTransfersJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTContractTransfersOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getNFTContractTransfersOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};