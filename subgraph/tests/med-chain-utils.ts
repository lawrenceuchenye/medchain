import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DoctorRegistered,
  PatientRegistered,
  SponsorRegistered,
  VolunteerRegistered
} from "../generated/MedChain/MedChain"

export function createDoctorRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
  specialization: string,
  licenseNumber: string,
  yearsOfExperience: BigInt,
  bio: string,
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
      "specialization",
      ethereum.Value.fromString(specialization)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "licenseNumber",
      ethereum.Value.fromString(licenseNumber)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "yearsOfExperience",
      ethereum.Value.fromUnsignedBigInt(yearsOfExperience)
    )
  )
  doctorRegisteredEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
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
  dateOfBirth: string,
  gender: string,
  medicalHistory: string,
  allergies: string,
  primaryCarePhysician: string,
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
      "dateOfBirth",
      ethereum.Value.fromString(dateOfBirth)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("gender", ethereum.Value.fromString(gender))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "medicalHistory",
      ethereum.Value.fromString(medicalHistory)
    )
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam("allergies", ethereum.Value.fromString(allergies))
  )
  patientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "primaryCarePhysician",
      ethereum.Value.fromString(primaryCarePhysician)
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

export function createSponsorRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
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

export function createVolunteerRegisteredEvent(
  user: Address,
  ipfsHash: string,
  fullName: string,
  email: string,
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
