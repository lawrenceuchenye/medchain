import {
  AdminAdded as AdminAddedEvent,
  AdminRegistered as AdminRegisteredEvent,
  AdminRemoved as AdminRemovedEvent,
  DoctorRegistered as DoctorRegisteredEvent,
  PatientRegistered as PatientRegisteredEvent,
  ReportSubmitted as ReportSubmittedEvent,
  SponsorRegistered as SponsorRegisteredEvent,
  VerificationApproved as VerificationApprovedEvent,
  VerificationRequested as VerificationRequestedEvent,
  VolunteerRegistered as VolunteerRegisteredEvent
} from "../generated/MedChain/MedChain"
import {
  AdminAdded,
  AdminRegistered,
  AdminRemoved,
  DoctorRegistered,
  PatientRegistered,
  ReportSubmitted,
  SponsorRegistered,
  VerificationApproved,
  VerificationRequested,
  VolunteerRegistered
} from "../generated/schema"

export function handleAdminAdded(event: AdminAddedEvent): void {
  let entity = new AdminAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAdmin = event.params.newAdmin
  entity.addedBy = event.params.addedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminRegistered(event: AdminRegisteredEvent): void {
  let entity = new AdminRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminRemoved(event: AdminRemovedEvent): void {
  let entity = new AdminRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.removedAdmin = event.params.removedAdmin
  entity.removedBy = event.params.removedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDoctorRegistered(event: DoctorRegisteredEvent): void {
  let entity = new DoctorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ipfsHash = event.params.ipfsHash
  entity.fullName = event.params.fullName
  entity.email = event.params.email
  entity.nationality = event.params.nationality
  entity.profilePicture = event.params.profilePicture
  entity.major = event.params.major
  entity.specialty = event.params.specialty
  entity.medicalSchoolEmail = event.params.medicalSchoolEmail
  entity.licensure = event.params.licensure
  entity.yearOfGraduation = event.params.yearOfGraduation
  entity.yearsOfExperience = event.params.yearsOfExperience
  entity.yearOfExpiration = event.params.yearOfExpiration
  entity.licensureEmail = event.params.licensureEmail
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
  entity.nationality = event.params.nationality
  entity.profilePicture = event.params.profilePicture
  entity.dateOfBirth = event.params.dateOfBirth
  entity.gender = event.params.gender
  entity.medicalCondition = event.params.medicalCondition
  entity.allergies = event.params.allergies
  entity.emergencyContact1 = event.params.emergencyContact1
  entity.emergencyContact2 = event.params.emergencyContact2
  entity.hospitalEmail = event.params.hospitalEmail
  entity.hospitalContact = event.params.hospitalContact
  entity.additionalInformation = event.params.additionalInformation
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReportSubmitted(event: ReportSubmittedEvent): void {
  let entity = new ReportSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reporter = event.params.reporter
  entity.reported = event.params.reported
  entity.reason = event.params.reason
  entity.timestamp = event.params.timestamp

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
  entity.nationality = event.params.nationality
  entity.profilePicture = event.params.profilePicture
  entity.gender = event.params.gender
  entity.companyName = event.params.companyName
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVerificationApproved(
  event: VerificationApprovedEvent
): void {
  let entity = new VerificationApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.volunteer = event.params.volunteer
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVerificationRequested(
  event: VerificationRequestedEvent
): void {
  let entity = new VerificationRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.volunteer = event.params.volunteer
  entity.timestamp = event.params.timestamp

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
  entity.nationality = event.params.nationality
  entity.profilePicture = event.params.profilePicture
  entity.gender = event.params.gender
  entity.registeredAt = event.params.registeredAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
