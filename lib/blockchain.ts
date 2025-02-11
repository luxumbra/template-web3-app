// Generated by @wagmi/cli@1.1.0 on 18/06/2023 at 13:35:41
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<TFunctionName extends string, TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<TFunctionName extends 'allowance', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<TFunctionName extends 'balanceOf', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<TFunctionName extends 'decimals', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'decimals', ...config } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<TFunctionName extends 'name', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'name', ...config } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<TFunctionName extends 'symbol', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'symbol', ...config } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<TFunctionName extends 'totalSupply', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc20ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'], TFunctionName, TMode>
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({ abi: erc20ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'approve'>['request']['abi'], 'approve', TMode> & {
        functionName?: 'approve'
      }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({ abi: erc20ABI, functionName: 'approve', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'transfer'>['request']['abi'], 'transfer', TMode> & {
        functionName?: 'transfer'
      }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({ abi: erc20ABI, functionName: 'transfer', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'transferFrom'>['request']['abi'], 'transferFrom', TMode> & {
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({ abi: erc20ABI, functionName: 'transferFrom', ...config } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>, 'abi'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc20ABI, ...config } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>, 'abi' | 'functionName'> = {} as any) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'transfer', ...config } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: 'transferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(config: Omit<UseContractEventConfig<typeof erc20ABI, TEventName>, 'abi'> = {} as any) {
  return useContractEvent({ abi: erc20ABI, ...config } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(config: Omit<UseContractEventConfig<typeof erc20ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Approval', ...config } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(config: Omit<UseContractEventConfig<typeof erc20ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc20ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}
