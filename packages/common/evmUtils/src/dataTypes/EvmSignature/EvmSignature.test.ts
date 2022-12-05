import { Core } from '@moralisweb3/common-core';
import { EvmSignature, EvmSignatureish } from './EvmSignature';
import { setupEvmUtils } from '../../test/setup';

const validInputs: [EvmSignatureish, string][] = [
  [
    // r,s,v input
    {
      v: 45,
      r: '9001253475243653702017016519257145538419454360627742044622070949800375057415',
      s: '21207930346202371260508142926393852886912381606567500827202803519435539899509',
    },
    '0x13e687678aee934e915fa79890e6dd32b3216b2562a50956f178ce3d86b57c072ee34360d5b83cdcf4b47ff3edb6e92a2431fa33a052ca059a7fa20d6d4264751b',
  ],
  [
    {
      v: 28,
      r: '0xb7cf302145348387b9e69fde82d8e634a0f8761e78da3bfa059efced97cbed0d',
      s: '0x2a66b69167cafe0ccfc726aec6ee393fea3cf0e4f3f9c394705e0f56d9bfe1c9',
    },
    '0xb7cf302145348387b9e69fde82d8e634a0f8761e78da3bfa059efced97cbed0d2a66b69167cafe0ccfc726aec6ee393fea3cf0e4f3f9c394705e0f56d9bfe1c91c',
  ],
  [
    {
      v: 26,
      r: '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f647',
      s: '0x1643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da',
    },
    '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f6471643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da1c',
  ],
  [
    {
      v: 27,
      r: '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f647',
      s: '0x1643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da',
    },
    '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f6471643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da1b',
  ],
  [
    {
      v: 28,
      r: '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f647',
      s: '0x1643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da',
    },
    '0x1556a70d76cc452ae54e83bb167a9041f0d062d000fa0dcb42593f77c544f6471643d14dbd6a6edc658f4b16699a585181a08dba4f6d16a9273e0e2cbed622da1c',
  ],
  [
    {
      v: 23,
      r: '0x0',
      s: '0x0',
    },
    '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b',
  ],
  [
    {
      v: 0,
      r: '0',
      s: '0',
    },
    '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b',
  ],
  // Signature string input
  [
    '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b',
    '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b',
  ],
  // Existing EvmSignature input
  [
    EvmSignature.create({
      r: '0x1',
      s: '0x2',
      v: 27,
    }),
    '0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000021b',
  ],
];

describe('EvmAddress', () => {
  let core: Core;

  beforeAll(() => {
    core = setupEvmUtils();
  });

  beforeEach(() => {
    core.config.reset();
  });

  it.each(validInputs)('should create a valid EvmSignature from %p', (input, expected) => {
    const signature = EvmSignature.create(input);

    expect(signature.format()).toBe(expected);
  });

  it('should throw an error on invaliud signature string', () => {
    expect(() =>
      EvmSignature.create(
        '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b',
      ),
    ).toThrowError('signature missing v and recoveryParam');
  });
});
