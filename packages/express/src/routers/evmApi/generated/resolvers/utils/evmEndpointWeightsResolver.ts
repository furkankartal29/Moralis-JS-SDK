import {
  EndpointWeightsJSONRequest,
  endpointWeightsOperation,
} from 'moralis/common-evm-utils';
import { NextFunction, Response, Request } from 'express';
import { OperationResolver } from '@moralisweb3/api-utils';
import Moralis from 'moralis';

export const evmEndpointWeightsResolver  = async (
  req: Request<EndpointWeightsJSONRequest>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { raw } = await new OperationResolver(endpointWeightsOperation, Moralis.EvmApi.baseUrl, Moralis.Core).fetch(
      endpointWeightsOperation.deserializeRequest(req.params, Moralis.Core),
    );

    return res.send(raw);
  } catch (error) {
    return next(error);
  }
};