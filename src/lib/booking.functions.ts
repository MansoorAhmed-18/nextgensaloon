import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(120),
  preferred_date: z.string().min(1),
  preferred_time: z.string().min(1).max(40),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
});

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

function getPublic() {
  return createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => bookingSchema.parse(d))
  .handler(async ({ data }) => {
    const sb = getPublic();
    const { error } = await sb.from("bookings").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      message: data.message || null,
      location: data.location || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const createContactMessage = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    const sb = getPublic();
    const { error } = await sb.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
