import {
  Cancelled as CancelledEvent,
  Completed as CompletedEvent,
  ModeratorAdded as ModeratorAddedEvent,
  ModeratorRemoved as ModeratorRemovedEvent,
  NewSigner as NewSignerEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Started as StartedEvent,
  Withdraw as WithdrawEvent
} from "../generated/SafeDeal/SafeDeal"
import {
  Cancelled,
  Completed,
  ModeratorAdded,
  ModeratorRemoved,
  NewSigner,
  OwnershipTransferred,
  Started,
  Withdraw
} from "../generated/schema"

export function handleCancelled(event: CancelledEvent): void {
  let entity = new Cancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SafeDeal_id = event.params.id
  entity.deal_seller = event.params.deal.seller
  entity.deal_buyer = event.params.deal.buyer
  entity.deal_referrer = event.params.deal.referrer
  entity.deal_amount = event.params.deal.amount
  entity.deal_serviceFee = event.params.deal.serviceFee
  entity.deal_referrerFee = event.params.deal.referrerFee
  entity.deal_totalAmount = event.params.deal.totalAmount
  entity.deal_isActive = event.params.deal.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompleted(event: CompletedEvent): void {
  let entity = new Completed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SafeDeal_id = event.params.id
  entity.deal_seller = event.params.deal.seller
  entity.deal_buyer = event.params.deal.buyer
  entity.deal_referrer = event.params.deal.referrer
  entity.deal_amount = event.params.deal.amount
  entity.deal_serviceFee = event.params.deal.serviceFee
  entity.deal_referrerFee = event.params.deal.referrerFee
  entity.deal_totalAmount = event.params.deal.totalAmount
  entity.deal_isActive = event.params.deal.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModeratorAdded(event: ModeratorAddedEvent): void {
  let entity = new ModeratorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.moderator = event.params.moderator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModeratorRemoved(event: ModeratorRemovedEvent): void {
  let entity = new ModeratorRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.moderator = event.params.moderator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewSigner(event: NewSignerEvent): void {
  let entity = new NewSigner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.signer = event.params.signer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStarted(event: StartedEvent): void {
  let entity = new Started(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SafeDeal_id = event.params.id
  entity.deal_seller = event.params.deal.seller
  entity.deal_buyer = event.params.deal.buyer
  entity.deal_referrer = event.params.deal.referrer
  entity.deal_amount = event.params.deal.amount
  entity.deal_serviceFee = event.params.deal.serviceFee
  entity.deal_referrerFee = event.params.deal.referrerFee
  entity.deal_totalAmount = event.params.deal.totalAmount
  entity.deal_isActive = event.params.deal.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.balanceBefore = event.params.balanceBefore
  entity.balanceAfter = event.params.balanceAfter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
