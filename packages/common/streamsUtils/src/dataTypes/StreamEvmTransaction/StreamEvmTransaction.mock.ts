import { StreamEvmTransactionInput } from './types';

const full1: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x9857d679ab331210161427d36d08c3b00e6d28c03366e9b891832ad9b5d478f7',
  gas: '200',
  gasPrice: '100',
  nonce: '1',
  input: '0x0000000000000000000000000000000000000000000000000000000000000001',
  fromAddress: '0xbb6a28edbbaf0c7542c73212d26cc0b249da47a5',
  toAddress: '0xee010a7476bc5adc88f1befc68c3b58f27f90419',
  transactionIndex: '0',
  type: '2',
  v: '1',
  r: '55027765199384985252601215868344739291659824467636591084158590421139463405720',
  s: '53895691942600754217479850344811302899696882373439350337626864866525744962625',
  value: '400',
  receiptRoot: '0x1',
  receiptStatus: '1',
  receiptGasUsed: '500',
  receiptCumulativeGasUsed: '600',
  receiptContractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
};

const full2: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x7ded61aec08aaa3289c74829b61b9bc991ae9969e2007e5b2812cde917ca453a',
  gas: '1000000',
  gasPrice: '21377854054',
  nonce: '17',
  input:
    '0x11dc8f880000000000000000000000000000000000000000000000004563918244f4000000000000000000000000000000000000000000000000000000000000000056a700000000000000000000000000000000000000000000000000000000000000c014e735ffdd9f71ef76cda6908a29d28ade555fa6848dd8bd763bfa68ca949e91172bfd891d138701e48d97ceacce1bed4d4099834aa560bb62b1433e1d6e2d24000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022cf42b171174c2969179e5951c19ca82f67e52d812cd2ce10aeeff95694e21831cb92d9bb70d2249338032ea8904ba8facb97089f52451ea0392a6fa990eb31e',
  transactionIndex: '7',
  fromAddress: '0xd6902c7927ab278f712fc48f8195e22ba292d9b3',
  toAddress: '0x302fd86163cb9ad5533b3952dafa3b633a82bc51',
  value: '0',
  type: '2',
  v: '0',
  r: '68283312269382097555641200407777134998892657340759445098739183727743127909217',
  s: '56567714706024657551872447639983689451632002119531017098199059811013396756714',
  receiptCumulativeGasUsed: '1596736',
  receiptGasUsed: '568219',
  receiptContractAddress: null,
  receiptRoot: null,
  receiptStatus: '1',
};

const full3: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x4caac9a937d928a389ebba19e08b5d6269a85c45633e503fe9f0fe8291ff151d',
  gas: '1000000',
  gasPrice: '21377854054',
  nonce: '3',
  input:
    '0x11dc8f880000000000000000000000000000000000000000000000004563918244f4000000000000000000000000000000000000000000000000000000000000000056a700000000000000000000000000000000000000000000000000000000000000c01122dcd465a0c8fbbbbe6d395776e0e4154c5c7514a1e19acddb236567329a611ce1ffb6c23a4b9f39b82460378affe67e14a58e14ac5f3968e475aad585d20a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022a017dd0a74ca976ff68c8ce8561f89e81a5fb1cbdcdf93be42aa6f597606ded11c62b5c506f906b444b2c63df0c3f0ff332203d96304bcaa4412d8f14fec5c5',
  transactionIndex: '8',
  fromAddress: '0x2137cc6753158fe0205771dcd751ad6143bbd160',
  toAddress: '0x302fd86163cb9ad5533b3952dafa3b633a82bc51',
  value: '0',
  type: '2',
  v: '0',
  r: '37060682326788299751962296875310481758199246263665602692434767018751342316568',
  s: '38345406551785761381432968091576072135768238699502050343970439585322877255293',
  receiptCumulativeGasUsed: '2164965',
  receiptGasUsed: '568229',
  receiptContractAddress: null,
  receiptRoot: null,
  receiptStatus: '1',
};

const full4: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0xb60728b66fb0811a35cf0b152cd3e19e132d141866fba0e6f82518d99002f5ee',
  gas: '1000000',
  gasPrice: '21377854054',
  nonce: '10',
  input:
    '0x11dc8f880000000000000000000000000000000000000000000000003782dace9d90000000000000000000000000000000000000000000000000000000000000000056a700000000000000000000000000000000000000000000000000000000000000c01c3f5fc75047df9bdbd0193b510895645ee2c44e60caa2f0c9d977dd92fd3d7716e2e28b1dca8b9c03d0dd04a12c97c35571177e352100c6bec2291910b4e7f5000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000042a017dd0a74ca976ff68c8ce8561f89e81a5fb1cbdcdf93be42aa6f597606ded2e204ba806180d811293d6cd01346722b0c5fc48b1d090d88dfea6251201db7a00000000000000000000000000000000000000000000000000000000000000000ad8c527fa8753c59b83935f4832bea46227ade479b455fbcedbe285fbb3ebc8',
  transactionIndex: '9',
  fromAddress: '0x4f924a427ac175d5276361f749dea1c445e802ec',
  toAddress: '0x302fd86163cb9ad5533b3952dafa3b633a82bc51',
  value: '0',
  type: '2',
  v: '1',
  r: '55027765199384985252601215868344739291659824467636591084158590421139463405720',
  s: '53895691942600754217479850344811302899696882373439350337626864866525744962625',
  receiptCumulativeGasUsed: '2927350',
  receiptGasUsed: '762385',
  receiptContractAddress: null,
  receiptRoot: null,
  receiptStatus: '1',
};

const full5: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x2d5a675d3c790b592f8e5ed7f51060e2108d1097d03d1dda9e341577e7022529',
  gas: '400000',
  gasPrice: '23004700387',
  nonce: '61',
  input:
    '0x85ff842c00000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006100000000000000000000000000000000000000000000000000000000000557300000000000000000000000000000000000000000000000000000000000000014339512c334a18d8b2fb5ce22a011464f72cd1f3b000000000000000000000000',
  transactionIndex: '23',
  fromAddress: '0x339512c334a18d8b2fb5ce22a011464f72cd1f3b',
  toAddress: '0x805fe47d1fe7d86496753bb4b36206953c1ae660',
  value: '30000000000000000',
  type: '2',
  v: '1',
  r: '4554617937921566033295632599987925644769918009935320697218498015854347337137',
  s: '43453526858043992409003514363829930224220328294237875345493490760893640863445',
  receiptCumulativeGasUsed: '15857060',
  receiptGasUsed: '156934',
  receiptContractAddress: null,
  receiptRoot: null,
  receiptStatus: '1',
};

// Only required keys are filled
const partial: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x9857d679ab331210161427d36d08c3b00e6d28c03366e9b891832ad9b5d478f7',
  fromAddress: '0xbb6a28edbbaf0c7542c73212d26cc0b249da47a5',
  transactionIndex: '0',
};

const partialNull: StreamEvmTransactionInput = {
  chain: '0x1',
  hash: '0x9857d679ab331210161427d36d08c3b00e6d28c03366e9b891832ad9b5d478f7',
  fromAddress: '0x0000000000000000000000000000000000000000',
  transactionIndex: '0',
  gas: null,
  gasPrice: null,
  nonce: null,
  input: null,
  toAddress: null,
  value: null,
  type: null,
  v: null,
  r: null,
  s: null,
  receiptCumulativeGasUsed: null,
  receiptGasUsed: null,
  receiptContractAddress: null,
  receiptRoot: null,
  receiptStatus: null,
};

export const mockStreamEvmTransactionInput = {
  FULL_1: full1,
  FULL_2: full2,
  FULL_3: full3,
  FULL_4: full4,
  FULL_5: full5,
  PARTIAL: partial,
  PARTIAL_NULL: partialNull,
};
