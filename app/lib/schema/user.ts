import { z } from "zod";
import { specialtyList } from "./specialty";

const BaseUserSchema = z.object({
	fullName: z
		.string()
		.min(1, { message: "Full name must be at least 1 character long." })
		.max(100, { message: "Full name must be at most 100 characters long." }),

	nationality: z
		.string()
		.min(1, { message: "Nationality is required." })
		.max(100, { message: "Nationality must be at most 100 characters long." }),

	profilePicture: z
		.string()
		.url({ message: "Invalid URL format for profile picture." })
		.max(500, {
			message: "Profile picture URL must be at most 500 characters long.",
		}),
});

/**
 * Schema for Doctor users.
 */
const DoctorSchema = BaseUserSchema.extend({
	role: z.literal("doctor"),

	major: z.string().min(1, { message: "Major is required." }).max(100, {
		message: "Major must be at most 100 characters long.",
	}),

	specialty: z.enum(specialtyList, { message: "Specialty is required." }),

	medicalSchoolEmail: z.string().email({
		message: "Invalid email format for Medical School Email.",
	}),

	licensure: z.string().min(1, { message: "Licensure is required." }).max(50, {
		message: "Licensure must be at most 50 characters long.",
	}),

	yearOfGraduation: z.coerce.date({
		message: "Invalid date format for Year of Graduation.",
	}),

	yearsOfExperience: z.number().int().min(0, {
		message: "Years of experience must be a non-negative integer.",
	}),

	yearOfExpiration: z.coerce.date({
		message: "Invalid date format for Year of Expiration.",
	}),

	licensureEmail: z.string().email({
		message: "Invalid email format for Licensure Email.",
	}),

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

	medicalCondition: z
		.string({
			message: "Medical condition is required.",
		})
		.optional(),

	allergies: z
		.string()
		.max(500, { message: "Allergies must be at most 500 characters long." })
		.optional(),

	emergencyContact1: z.string({
		message: "Emergency contact is required.",
	}),

	emergencyContact2: z
		.string({
			message: "Emergency contact is required.",
		})
		.optional(),

	hospitalEmail: z
		.string()
		.email({
			message: "Invalid email format for Hospital Email.",
		})
		.optional(),

	hospitalContact: z
		.string({
			message: "Hospital contact is required.",
		})
		.optional(),

	additionalInformation: z
		.string()
		.max(1000, {
			message: "Additional information must be at most 1000 characters long.",
		})
		.optional(),

	gender: z.enum(["male", "female", "other"], {
		errorMap: () => ({
			message: "Gender must be one of: male, female, other.",
		}),
	}),
});

/**
 * Schema for Volunteer users.
 */
const VolunteerSchema = BaseUserSchema.extend({
	role: z.literal("volunteer"),
});

/**
 * Schema for Sponsor users.
 */
const SponsorSchema = BaseUserSchema.extend({
	role: z.literal("sponsor"),
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
