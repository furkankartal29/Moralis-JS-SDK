import {
  GetDateToBlockJSONRequest,
  getDateToBlockOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmGetDateToBlockResolver  = async (
  req: Request<GetDateToBlockJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(getDateToBlockOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      getDateToBlockOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};