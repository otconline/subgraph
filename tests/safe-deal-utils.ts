import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Cancelled,
  Completed,
  ModeratorAdded,
  ModeratorRemoved,
  NewSigner,
  OwnershipTransferred,
  Started,
  Withdraw
} from "../generated/SafeDeal/SafeDeal"

export function createCancelledEvent(
  id: BigInt,
  deal: ethereum.Tuple
): Cancelled {
  let cancelledEvent = changetype<Cancelled>(newMockEvent())

  cancelledEvent.parameters = new Array()

  cancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cancelledEvent.parameters.push(
    new ethereum.EventParam("deal", ethereum.Value.fromTuple(deal))
  )

  return cancelledEvent
}

export function createCompletedEvent(
  id: BigInt,
  deal: ethereum.Tuple
): Completed {
  let completedEvent = changetype<Completed>(newMockEvent())

  completedEvent.parameters = new Array()

  completedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  completedEvent.parameters.push(
    new ethereum.EventParam("deal", ethereum.Value.fromTuple(deal))
  )

  return completedEvent
}

export function createModeratorAddedEvent(moderator: Address): ModeratorAdded {
  let moderatorAddedEvent = changetype<ModeratorAdded>(newMockEvent())

  moderatorAddedEvent.parameters = new Array()

  moderatorAddedEvent.parameters.push(
    new ethereum.EventParam("moderator", ethereum.Value.fromAddress(moderator))
  )

  return moderatorAddedEvent
}

export function createModeratorRemovedEvent(
  moderator: Address
): ModeratorRemoved {
  let moderatorRemovedEvent = changetype<ModeratorRemoved>(newMockEvent())

  moderatorRemovedEvent.parameters = new Array()

  moderatorRemovedEvent.parameters.push(
    new ethereum.EventParam("moderator", ethereum.Value.fromAddress(moderator))
  )

  return moderatorRemovedEvent
}

export function createNewSignerEvent(signer: Address): NewSigner {
  let newSignerEvent = changetype<NewSigner>(newMockEvent())

  newSignerEvent.parameters = new Array()

  newSignerEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )

  return newSignerEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createStartedEvent(id: BigInt, deal: ethereum.Tuple): Started {
  let startedEvent = changetype<Started>(newMockEvent())

  startedEvent.parameters = new Array()

  startedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  startedEvent.parameters.push(
    new ethereum.EventParam("deal", ethereum.Value.fromTuple(deal))
  )

  return startedEvent
}

export function createWithdrawEvent(
  balanceBefore: BigInt,
  balanceAfter: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "balanceBefore",
      ethereum.Value.fromUnsignedBigInt(balanceBefore)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "balanceAfter",
      ethereum.Value.fromUnsignedBigInt(balanceAfter)
    )
  )

  return withdrawEvent
}
