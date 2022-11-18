import {
  GetSPLJSONRequest ,
  getSPLOperation ,
  GetSPLJSONResponse ,
} from 'moralis/common-sol-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const solApiGetSPLResolver  = async (
  req: Request<GetSPLJSONRequest >,
  res: Response<GetSPLJSONResponse >,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getSPLOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      req.params,
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};