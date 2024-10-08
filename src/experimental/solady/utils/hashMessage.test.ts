import type { Address } from 'abitype'
import { beforeAll, expect, test } from 'vitest'

import { Mock4337AccountFactory } from '~contracts/generated.js'
import { anvilMainnet } from '~test/src/anvil.js'
import { accounts } from '~test/src/constants.js'
import { deployMock4337Account } from '~test/src/utils.js'
import { sign } from '../../../accounts/index.js'
import {
  getEip712Domain,
  mine,
  simulateContract,
  verifyMessage,
  writeContract,
} from '../../../actions/index.js'
import { pad } from '../../../utils/index.js'
import { hashMessage } from './hashMessage.js'

const client = anvilMainnet.getClient()

let verifier: Address
beforeAll(async () => {
  const { factoryAddress } = await deployMock4337Account()
  const { result, request } = await simulateContract(client, {
    account: accounts[0].address,
    abi: Mock4337AccountFactory.abi,
    address: factoryAddress,
    functionName: 'createAccount',
    args: [accounts[0].address, pad('0x69')],
  })
  verifier = result
  await writeContract(client, request)
  await mine(client, { blocks: 1 })
})

test('default', async () => {
  const { domain: verifierDomain } = await getEip712Domain(client, {
    address: verifier,
  })

  const message = 'hello world'
  const hash = hashMessage({
    message,
    verifierDomain,
  })

  expect(hash).toBeDefined()

  const signature = await sign({
    hash,
    privateKey: accounts[0].privateKey,
  })
  expect(
    await verifyMessage(client!, {
      address: verifier,
      message,
      signature,
    }),
  ).toBeTruthy()
})
