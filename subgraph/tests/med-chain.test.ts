import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DoctorRegistered } from "../generated/schema"
import { DoctorRegistered as DoctorRegisteredEvent } from "../generated/MedChain/MedChain"
import { handleDoctorRegistered } from "../src/med-chain"
import { createDoctorRegisteredEvent } from "./med-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let ipfsHash = "Example string value"
    let fullName = "Example string value"
    let email = "Example string value"
    let specialization = "Example string value"
    let licenseNumber = "Example string value"
    let yearsOfExperience = BigInt.fromI32(234)
    let bio = "Example string value"
    let hospitalAffiliation = "Example string value"
    let registeredAt = BigInt.fromI32(234)
    let newDoctorRegisteredEvent = createDoctorRegisteredEvent(
      user,
      ipfsHash,
      fullName,
      email,
      specialization,
      licenseNumber,
      yearsOfExperience,
      bio,
      hospitalAffiliation,
      registeredAt
    )
    handleDoctorRegistered(newDoctorRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DoctorRegistered created and stored", () => {
    assert.entityCount("DoctorRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsHash",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fullName",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "email",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "specialization",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "licenseNumber",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "yearsOfExperience",
      "234"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bio",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hospitalAffiliation",
      "Example string value"
    )
    assert.fieldEquals(
      "DoctorRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "registeredAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
