import {
  DoctorRegistered as DoctorRegisteredEvent,
  PatientRegistered as PatientRegisteredEvent,
  SponsorRegistered as SponsorRegisteredEvent,
  VolunteerRegistered as VolunteerRegisteredEvent
} from "../generated/MedChain/MedChain"
import {
  DoctorRegistered,
  PatientRegistered,
  SponsorRegistered,
  VolunteerRegistered
} from "../generated/schema"

export function handleDoctorRegistered(event: DoctorRegisteredEvent): void {
  let entity = new DoctorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.specialization = event.params.specialization
  entity.licenseNumber = event.params.licenseNumber
  entity.yearsOfExperience = event.params.yearsOfExperience
  entity.bio = event.params.bio
  entity.hospitalAffiliation = event.params.hospitalAffiliation
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePatientRegistered(event: PatientRegisteredEvent): void {
  let entity = new PatientRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.dateOfBirth = event.params.dateOfBirth
  entity.gender = event.params.gender
  entity.medicalHistory = event.params.medicalHistory
  entity.allergies = event.params.allergies
  entity.primaryCarePhysician = event.params.primaryCarePhysician
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorRegistered(event: SponsorRegisteredEvent): void {
  let entity = new SponsorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.gender = event.params.gender
  entity.companyName = event.params.companyName
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVolunteerRegistered(
  event: VolunteerRegisteredEvent
): void {
  let entity = new VolunteerRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.gender = event.params.gender
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
