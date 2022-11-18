import {
  GetNFTMetadataJSONRequest ,
  getNFTMetadataOperation ,
  GetNFTMetadataJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetNFTMetadataResolver  = async (
  req: Request<GetNFTMetadataJSONRequest >,
  res: Response<GetNFTMetadataJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getNFTMetadataOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};