import {
  GetSPLJSONRequest,
  getSPLOperation,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solGetSPLResolver  = async (
  req: Request<GetSPLJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getSPLOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getSPLOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};