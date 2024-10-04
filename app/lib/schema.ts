import { z } from "zod";

const BaseUserSchema = z.object({
  userAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, {
    message: "Invalid Ethereum address format.",
  }),

  name: z
    .string()
    .min(1, { message: "Name must be at least 1 character long." })
    .max(100, { message: "Name must be at most 100 characters long." }),

  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email must be at most 100 characters long." }),

  role: z.enum(["doctor", "patient", "volunteer", "sponsor"], {
    errorMap: () => ({
      message: "Role must be one of: doctor, patient, volunteer, sponsor.",
    }),
  }),

  registeredAt: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "Invalid date-time format.",
  }),
});

/**
 * Schema for Doctor users.
 */
const DoctorSchema = BaseUserSchema.extend({
  role: z.literal("doctor"),

  specialization: z
    .string()
    .min(1, { message: "Specialization is required." })
    .max(100, {
      message: "Specialization must be at most 100 characters long.",
    }),

  licenseNumber: z
    .string()
    .min(1, { message: "License number is required." })
    .max(50, { message: "License number must be at most 50 characters long." }),

  yearsOfExperience: z
    .number()
    .int({ message: "Years of experience must be an integer." })
    .min(0, { message: "Years of experience cannot be negative." })
    .max(100, { message: "Years of experience must be reasonable." }),

  bio: z
    .string()
    .max(500, { message: "Bio must be at most 500 characters long." })
    .optional(),

  hospitalAffiliation: z
    .string()
    .max(100, {
      message: "Hospital affiliation must be at most 100 characters long.",
    })
    .optional(),
});

/**
 * Schema for Patient users.
 */
const PatientSchema = BaseUserSchema.extend({
  role: z.literal("patient"),

  dateOfBirth: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "Invalid date format for Date of Birth.",
  }),

  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({
      message: "Gender must be one of: male, female, other.",
    }),
  }),

  medicalHistory: z
    .string()
    .max(1000, {
      message: "Medical history must be at most 1000 characters long.",
    })
    .optional(),

  allergies: z
    .string()
    .max(500, { message: "Allergies must be at most 500 characters long." })
    .optional(),

  primaryCarePhysician: z
    .string()
    .max(100, {
      message:
        "Primary care physician name must be at most 100 characters long.",
    })
    .optional(),
});

/**
 * Schema for Volunteer users.
 */
const VolunteerSchema = BaseUserSchema.extend({
  role: z.literal("volunteer"),

  firstName: z
    .string()
    .min(1, { message: "First name is required." })
    .max(50, { message: "First name must be at most 50 characters long." }),

  lastName: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Last name must be at most 50 characters long." }),

  dateOfBirth: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "Invalid date format for Date of Birth.",
  }),

  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({
      message: "Gender must be one of: male, female, other.",
    }),
  }),
});

/**
 * Schema for Sponsor users.
 */
const SponsorSchema = BaseUserSchema.extend({
  role: z.literal("sponsor"),

  firstName: z
    .string()
    .min(1, { message: "First name is required." })
    .max(50, { message: "First name must be at most 50 characters long." }),

  lastName: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Last name must be at most 50 characters long." }),

  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format for Date of Birth.",
  }),

  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({
      message: "Gender must be one of: male, female, other.",
    }),
  }),

  companyName: z
    .string()
    .min(1, { message: "Company name is required." })
    .max(100, { message: "Company name must be at most 100 characters long." }),
});

/**
 * Discriminated Union Schema for all user types.
 */
export const MedChainUserSchema = z.discriminatedUnion("role", [
  DoctorSchema,
  PatientSchema,
  VolunteerSchema,
  SponsorSchema,
]);

export type MedChainUser = z.infer<typeof MedChainUserSchema>;
