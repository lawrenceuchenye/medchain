import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/MedChain/MedChain"

export function createAdminAddedEvent(
  newAdmin: Address,
  addedBy: Address
): AdminAdded {
  let adminAddedEvent = changetype<AdminAdded>(newMockEvent())

  adminAddedEvent.parameters = new Array()

  adminAddedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )
  adminAddedEvent.parameters.push(
    new ethereum.EventParam("addedBy", ethereum.Value.fromAddress(addedBy))
  )

  return adminAddedEvent
}

export function createAdminRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  registeredAt: BigInt
): AdminRegistered {
  let adminRegisteredEvent = changetype<AdminRegistered>(newMockEvent())

  adminRegisteredEvent.parameters = new Array()

  adminRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  adminRegisteredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  adminRegisteredEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  adminRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  adminRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registeredAt",
      ethereum.Value.fromUnsignedBigInt(registeredAt)
    )
  )

  return adminRegisteredEvent
}

export function createAdminRemovedEvent(
  removedAdmin: Address,
  removedBy: Address
): AdminRemoved {
  let adminRemovedEvent = changetype<AdminRemoved>(newMockEvent())

  adminRemovedEvent.parameters = new Array()

  adminRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "removedAdmin",
      ethereum.Value.fromAddress(removedAdmin)
    )
  )
  adminRemovedEvent.parameters.push(
    new ethereum.EventParam("removedBy", ethereum.Value.fromAddress(removedBy))
  )

  return adminRemovedEvent
}

export function createDoctorRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  nationality: string,
  profilePicture: string,
  major: string,
  specialty: string,
  medicalSchoolEmail: string,
  licensure: string,
  yearOfGraduation: BigInt,
  yearsOfExperience: BigInt,
  yearOfExpiration: BigInt,
  licensureEmail: string,
  hospitalAffiliation: string,
  registeredAt: BigInt
): DoctorRegistered {
  let doctorRegisteredEvent = changetype<DoctorRegistered>(newMockEvent())

  doctorRegisteredEvent.parameters = new Array()

  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nationality",
      ethereum.Value.fromString(nationality)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("major", ethereum.Value.fromString(major))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("specialty", ethereum.Value.fromString(specialty))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "medicalSchoolEmail",
      ethereum.Value.fromString(medicalSchoolEmail)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("licensure", ethereum.Value.fromString(licensure))
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "yearOfGraduation",
      ethereum.Value.fromUnsignedBigInt(yearOfGraduation)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "yearsOfExperience",
      ethereum.Value.fromUnsignedBigInt(yearsOfExperience)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "yearOfExpiration",
      ethereum.Value.fromUnsignedBigInt(yearOfExpiration)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "licensureEmail",
      ethereum.Value.fromString(licensureEmail)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalAffiliation",
      ethereum.Value.fromString(hospitalAffiliation)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registeredAt",
      ethereum.Value.fromUnsignedBigInt(registeredAt)
    )
  )

  return doctorRegisteredEvent
}

export function createPatientRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  nationality: string,
  profilePicture: string,
  dateOfBirth: string,
  gender: string,
  medicalCondition: string,
  allergies: string,
  emergencyContact1: string,
  emergencyContact2: string,
  hospitalEmail: string,
  hospitalContact: string,
  additionalInformation: string,
  registeredAt: BigInt
): PatientRegistered {
  let patientRegisteredEvent = changetype<PatientRegistered>(newMockEvent())

  patientRegisteredEvent.parameters = new Array()

  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nationality",
      ethereum.Value.fromString(nationality)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "dateOfBirth",
      ethereum.Value.fromString(dateOfBirth)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("gender", ethereum.Value.fromString(gender))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "medicalCondition",
      ethereum.Value.fromString(medicalCondition)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("allergies", ethereum.Value.fromString(allergies))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyContact1",
      ethereum.Value.fromString(emergencyContact1)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyContact2",
      ethereum.Value.fromString(emergencyContact2)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalEmail",
      ethereum.Value.fromString(hospitalEmail)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalContact",
      ethereum.Value.fromString(hospitalContact)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "additionalInformation",
      ethereum.Value.fromString(additionalInformation)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registeredAt",
      ethereum.Value.fromUnsignedBigInt(registeredAt)
    )
  )

  return patientRegisteredEvent
}

export function createReportSubmittedEvent(
  reporter: Address,
  reported: Address,
  reason: string,
  timestamp: BigInt
): ReportSubmitted {
  let reportSubmittedEvent = changetype<ReportSubmitted>(newMockEvent())

  reportSubmittedEvent.parameters = new Array()

  reportSubmittedEvent.parameters.push(
    new ethereum.EventParam("reporter", ethereum.Value.fromAddress(reporter))
  )
  reportSubmittedEvent.parameters.push(
    new ethereum.EventParam("reported", ethereum.Value.fromAddress(reported))
  )
  reportSubmittedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )
  reportSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return reportSubmittedEvent
}

export function createSponsorRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  nationality: string,
  profilePicture: string,
  gender: string,
  companyName: string,
  registeredAt: BigInt
): SponsorRegistered {
  let sponsorRegisteredEvent = changetype<SponsorRegistered>(newMockEvent())

  sponsorRegisteredEvent.parameters = new Array()

  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nationality",
      ethereum.Value.fromString(nationality)
    )
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("gender", ethereum.Value.fromString(gender))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "companyName",
      ethereum.Value.fromString(companyName)
    )
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registeredAt",
      ethereum.Value.fromUnsignedBigInt(registeredAt)
    )
  )

  return sponsorRegisteredEvent
}

export function createVerificationApprovedEvent(
  volunteer: Address,
  timestamp: BigInt
): VerificationApproved {
  let verificationApprovedEvent = changetype<VerificationApproved>(
    newMockEvent()
  )

  verificationApprovedEvent.parameters = new Array()

  verificationApprovedEvent.parameters.push(
    new ethereum.EventParam("volunteer", ethereum.Value.fromAddress(volunteer))
  )
  verificationApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return verificationApprovedEvent
}

export function createVerificationRequestedEvent(
  volunteer: Address,
  timestamp: BigInt
): VerificationRequested {
  let verificationRequestedEvent = changetype<VerificationRequested>(
    newMockEvent()
  )

  verificationRequestedEvent.parameters = new Array()

  verificationRequestedEvent.parameters.push(
    new ethereum.EventParam("volunteer", ethereum.Value.fromAddress(volunteer))
  )
  verificationRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return verificationRequestedEvent
}

export function createVolunteerRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  nationality: string,
  profilePicture: string,
  gender: string,
  registeredAt: BigInt
): VolunteerRegistered {
  let volunteerRegisteredEvent = changetype<VolunteerRegistered>(newMockEvent())

  volunteerRegisteredEvent.parameters = new Array()

  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nationality",
      ethereum.Value.fromString(nationality)
    )
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam("gender", ethereum.Value.fromString(gender))
  )
  volunteerRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registeredAt",
      ethereum.Value.fromUnsignedBigInt(registeredAt)
    )
  )

  return volunteerRegisteredEvent
}
